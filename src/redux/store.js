import { configureStore } from '@reduxjs/toolkit'
import  addProductaSlice  from './addProducts'
import  addLikedProductSlice  from './addLikedProducts'
import  productlikedLike from './addLikedProducts'
export const store = configureStore({
  reducer: {
    addProductToWishlist: addProductaSlice,
    addLikedProductToWishlist:addLikedProductSlice,
    productlikedLike:productlikedLike,
  },
})