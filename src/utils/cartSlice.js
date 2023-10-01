import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:  'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            var finalData = state.items.filter(item => item.name!=action.payload);
            state.items = finalData;
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;