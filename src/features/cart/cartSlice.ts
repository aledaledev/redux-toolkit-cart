import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataItems from '../../data/dataItems.json'
import { CartState } from "../../types";

const initialState:CartState = {
    cartItems: dataItems,
    amount: dataItems.map(item=> item.amount).reduce((prev,cur) => prev+cur),
    total: dataItems.map(item=> Number(item.price)).reduce((prev,cur) => prev+cur),
    isLoading: true
}

const cartSlice = createSlice({
    name:'cart',
    initialState
})

export default cartSlice.reducer