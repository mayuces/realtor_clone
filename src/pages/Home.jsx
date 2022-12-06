import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import Slider from '../components/Slider'
import { db } from '../firebase';

export default function Home() {
  //offers
  const [offerListings, setOfferListings] = useState(null);
  const [rentListings, setRentListings] = useState(null);
  const [saleListings, setSaleListings] = useState(null);


  async function fetchListings(listingType, setter) {
    try {
      // get reference
      const listingRef = collection(db, 'listings');
      let q;
      if (listingType === 'offer') {
        q = query(listingRef, where(listingType, '==', true), orderBy('timestamp', 'desc'), limit(4));
      } else {
        q = query(listingRef, where('type', '==', listingType), orderBy('timestamp', 'desc'), limit(4));
      }
      // execute the query
      const querySnap = await getDocs(q);
      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      });
      setter(listings);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListings('offer',setOfferListings);
    fetchListings('sale',setSaleListings);
    fetchListings('rent',setRentListings);
  }, [offerListings,rentListings, saleListings]);

  
  return (
    <div>
      <Slider />
      <div className='max-w-6xl mx-auto pt-4 space-y-6'>
        {offerListings && offerListings.length > 0 && (
          <div className='m-2 mb-6'>
            <h2 className='px-3 text-2xl mt-6 font-semibold'>
              Recent Offers
            </h2>
            <Link to='offers'>
              <p className='px-3 tex-sm text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out'>
                Show more offers
              </p>
            </Link>
            <ul 
              className='sm: grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            >
              {offerListings.map(listing => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='max-w-6xl mx-auto pt-4 space-y-6'>
        {rentListings && rentListings.length > 0 && (
          <div className='m-2 mb-6'>
            <h2 className='px-3 text-2xl mt-6 font-semibold'>
              Places for Rent
            </h2>
            <Link to='/category/rent'>
              <p className='px-3 tex-sm text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out'>
                Show more places for rent
              </p>
            </Link>
            <ul 
              className='sm: grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            >
              {rentListings.map(listing => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='max-w-6xl mx-auto pt-4 space-y-6'>
        {saleListings && saleListings.length > 0 && (
          <div className='m-2 mb-6'>
            <h2 className='px-3 text-2xl mt-6 font-semibold'>
              Places for Sale
            </h2>
            <Link to='/category/sale'>
              <p className='px-3 tex-sm text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out'>
                Show more places for sale
              </p>
            </Link>
            <ul 
              className='sm: grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            >
              {saleListings.map(listing => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}