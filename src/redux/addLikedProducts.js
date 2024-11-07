import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
  data: [],
};

export const addLikedProductSlice = createSlice({
  name: 'addLikedProducts',
  initialState: initialStateValues,
  reducers: {
    addLikedProductToWishlist: (state, action) => {
      const id = action.payload.id;
      if (!state.data.find((item) => item.id === id)) {
        state.data.push(action.payload);
        alert(`Yoqtirilgan mahsulotlarga qo'shildi`);
      } else {
        alert(`Bu mahsulot allaqachon yoqtirilgan mahsulotlarda mavjud`);
      }

      console.log(action);
    },
    productlikedLike: (state, action) => {
      state.data = state.data.filter((item) => item.id == action.payload);
    },
  },
});

export const { addLikedProductToWishlist, productlikedLike } = addLikedProductSlice.actions;

export default addLikedProductSlice.reducer;
