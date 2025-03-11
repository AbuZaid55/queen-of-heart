const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        items:[]
    },
    reducers:{
       addToCart:(state,action)=> {
        state.items = action.payload
       } 
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer