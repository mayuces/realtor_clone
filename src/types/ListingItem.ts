import { Listing } from "./Listing";


export interface ListingItem {
  listing: Listing, 
  id: number, 
  onEdit?: () => {}, 
  onDelete?: () => {},
}