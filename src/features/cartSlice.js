import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    totalQuantity: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const product = action.payload;

            //checking whether if the item already exists
            const existingItem = state.cartItems.find((item)=> item.id === product.id)

            if(existingItem){
                existingItem.quantity += 1
            }else{
                state.cartItems.push({...product, quantity:1})
            }
            //Updating the value
            state.totalQuantity += 1
            state.totalPrice += product.price
        },
        removeCart: (state, action) =>{
            const id = action.payload

            const existingItem = state.cartItems.find((item)=> item.id === id)

            if (!existingItem) return;
            
            if(existingItem.quantity > 1){
                existingItem.quantity -= 1
            }else{
                state.cartItems = state.cartItems.filter((item) => item.id !== id)
            }
            
            state.totalQuantity -= 1;
            state.totalPrice -= existingItem.price
        },
        clearCart:(state, action)=>{
            state.cartItems=[];
            state.totalPrice=0;
            state.totalQuantity=0;
        }
    }
})

export const {addToCart,removeCart,clearCart} = cartSlice.actions;

export default cartSlice.reducer;