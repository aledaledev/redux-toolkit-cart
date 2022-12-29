import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataItems from '../../data/dataItems.json'

const initialState = {
    cartItems: dataItems,
    amount: 0,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name:'cart',
    initialState
})
console.log(cartSlice);


export default cartSlice.reducer