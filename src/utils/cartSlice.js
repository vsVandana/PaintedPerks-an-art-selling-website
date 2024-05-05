import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers:{
        addItemtoCart : (state, action)=>{
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if(existingItemIndex === -1){
                state.items.push({ ...action.payload, quantity: 1 }); // Add quantity property and initialize to 1
            } else {
                state.items[existingItemIndex].quantity++; // Increase quantity if item already exists
            }
        },
        removeItemtoCart : (state, action)=>{
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        decreaseItemQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item.quantity > 1) {
                item.quantity--;
            }
        },
        increaseItemQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            item.quantity++;
        },
        clearCart : (state) => {
           state.items.length = 0
        }
    }
})

export const {addItemtoCart, removeItemtoCart, decreaseItemQuantity, increaseItemQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer