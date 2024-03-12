import { createSlice, current } from "@reduxjs/toolkit";

const initialState={

items:[]


}

const Slice=createSlice({

    name:"cart",
    initialState,

    reducers:{
        addItem:(state,action)=>{
        state.items.push(action.payload)
        console.log(current(state),"this is from state")



        }

    }
})


export const {addItem}=Slice.actions
export default Slice.reducer