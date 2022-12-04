
export default function ListingItem({ listing, id }) {
  return (
    <div>{listing.name + id}</div>
  )
}
