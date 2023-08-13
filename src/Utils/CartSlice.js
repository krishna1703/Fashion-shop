
 import { createSlice } from "@reduxjs/toolkit";

  const CartSlice = createSlice({

     name :"Cart" , 
     initialState :{
        items: [ ]
     },

 reducers: {

    addItem : (State , action) => {

        State.items.push(action.payload);
    },
    removeItem : (State , action) => {

        State.items.pop(action.payload);
    }
    ,
    ClearItem : (State) => {

        State.items =  [ ];
    }
 }

  })


  export const { addItem , removeItem , ClearItem } = CartSlice.actions; 
  export default CartSlice.reducer