import { createSlice } from "@reduxjs/toolkit";



const MyCartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProductToMyCart(state, action) {
            let myindex = -1;
            state.map((item, index) => {
                if (item.id === action.payload.id) {
                    myindex = index;
                }
            });
            if (myindex === -1) {
                state.push({
                    brand: action.payload.brand,
                    id: action.payload.id,
                    image: action.payload.image,
                    price: action.payload.price,
                    quality: action.payload.quality + 1
                });
            } else {
                state[myindex].quality = state[myindex].quality + 1;
            }
        },
    

        // decress product quentity
        
        removeMyCartItemCat(state,action){
            let myindex=-1;
            state.map((item,index)=>{
                if(index.id=== action.payload.id){
                    myindex=index
                }
            })
            if(myindex== -1){

            }else{
                state[myindex].quality = state[myindex].quality -1;

            }
        },

       // delete item 

        deleteFromNycart(state,action){
           return(state=state.filter(item=>item.id !== action.payload))
        }
    },
});

export const { addProductToMyCart,removeMyCartItemCat,deleteFromNycart} = MyCartSlice.actions;

export default MyCartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cartItems: [], // Each item should have a unique identifier (e.g., product ID)
// };

// const MyCartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addProductToMyCart(state, action) {
//             const { id } = action.payload;
//             const existingItem = state.cartItems.find(item => item.id === id);
//             if (existingItem) {
//                 existingItem.quality += 1;
//             } else {
//                 state.cartItems.push({
//                     brand: action.payload.brand,
//                     id: action.payload.id,
//                     image: action.payload.image,
//                     price: action.payload.price,
//                     quality: 1
//                 });
//             }
//         },
//         removeMyCartItemCat(state, action) {
//             const { id } = action.payload;
//             const existingItem = state.cartItems.find(item => item.id === id);
//             if (existingItem && existingItem.quality > 1) {
//                 existingItem.quality -= 1;
//             }
//         },
//         deleteFromNycart(state, action) {
//             state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
//         }
//     },
// });

// export const { addProductToMyCart, removeMyCartItemCat, deleteFromNycart } = MyCartSlice.actions;

// export default MyCartSlice.reducer;
