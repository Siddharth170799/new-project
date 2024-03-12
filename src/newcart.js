import { configureStore } from "@reduxjs/toolkit";

import Slice  from './createSlice'

const Store=configureStore({

reducer:{

cart:Slice

}

})


export default Store