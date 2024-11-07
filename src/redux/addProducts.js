import { createSlice } from '@reduxjs/toolkit'


const initialStateValues = {
  data: [],
};

export const addProductaSlice = createSlice({
  name: 'addProducta',
  initialState: initialStateValues,
  reducers: {
    addProductToWishlist: (state, action) =>{
        const id = action.payload.id;
        if(!state.data.find((iteam)=> iteam.id === id)){
            state.data.push(action.payload);
            alert(`mahsulot qo'shildi`)
          }else{
            alert(`maxsulot mavjud`)
          }

          
          console.log(action);
    }
  },
})


export const { addProductToWishlist} = addProductaSlice.actions

export default addProductaSlice.reducer