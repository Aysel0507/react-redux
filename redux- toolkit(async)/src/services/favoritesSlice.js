import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



  const customerSlice= createSlice({
    name: "customer",
    initialState: {
        favs:[]
    },

    reducers: {
        toggle(state,action){

        }
    },
   }
)

export default customerSlice.reducer