// this is global? centralized store 
// redux store 

import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer:{
        reducer1:{},  //user slice 
        reducer2:{},  // transaction slice 
        reducer3:{},  // 
        
    }
})

export default store 