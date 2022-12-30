import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import dataItems from '../../data/dataItems.json'
import { CartState } from "../../types";
import axios from 'axios'

//callback function
//lifecycle actions
//thunkAPI

const url = "https://course-api.com/react-useReducer-cart-project"

export const getCartItems = createAsyncThunk('cart/getCartItems', 
/*()=>{
    return fetch(url)   
    .then(resp => resp.json())
    .catch(err => console.log(err))
}*/

//thunk API is powerful
 async (name,thunkAPI)=>{
    try {
        //console.log(thunkAPI.getState());
        //thunkAPI.dispatch(cleanCart())
        const resp = await axios(url)
        return resp.data
    } catch (err){
        return thunkAPI.rejectWithValue('something is wrong')
    }
}
) 

const initialState:CartState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        cleanCart: (state) => {
            state.cartItems=[]
        },
        removeItem:(state,action)=>{
            state.cartItems=state.cartItems.filter(({id})=> id!== action.payload)
        },
        increaseItem:(state,action)=>{
            const indexItem = state.cartItems.findIndex(({id}) => id===action.payload)
            const cart = [...state.cartItems]
            cart[indexItem].amount+=1 
            state.cartItems=cart
            //state.cartItems[indexItem].amount+= 1 -> este si funciona
            //return {...state, cartItems:cart} -> immer problem
            
        },
        decreaseItem:(state,action)=>{
            const indexItem = state.cartItems.findIndex(({id}) => id===action.payload)
            const cart = [...state.cartItems]
            cart[indexItem].amount-=1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            state.cartItems=cart
        },
        setTotals:(state)=>{
            if(state.cartItems.length===0){
                state.amount=0
                state.total=0
            } else {
                state.amount=state.cartItems.map(item=> item.amount).reduce((prev,cur) => prev+cur)
                state.total=Number((state.cartItems.map(item=> Number(item.price)*item.amount).reduce((prev,cur) => prev+cur)).toFixed(2))
            }
        }
    },
    extraReducers:{
        [getCartItems.pending]:(state) =>{
            state.isLoading = true
        },
        [getCartItems.fulfilled]:(state,action) =>{
            console.log(action);
            state.isLoading = false
            state.cartItems= action.payload
        },
        [getCartItems.rejected]:(state,action) => {
            console.log(action);
            state.isLoading= false
        }
    }
})

//no es necesario crear actions
export const {cleanCart,setTotals,decreaseItem,increaseItem,removeItem} = cartSlice.actions
export default cartSlice.reducer