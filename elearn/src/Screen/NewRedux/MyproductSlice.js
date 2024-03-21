import { createSlice } from "@reduxjs/toolkit";

const MyProductSlice=createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addMyProduct(state,action){
            state.push(action.payload)
        },
        incressqty(state,action){
            let myindex=-1;
            state.map((item,index)=>{
                if(item.id==action.payload)
                myindex=index
            })
        if(myindex=-1){

        }else{
            state[myindex].quality=state[myindex].quality+1
        }
        }
    },
})
export const{addMyProduct,incressqty} =MyProductSlice.actions;
export default MyProductSlice.reducer;