import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './Features/searchSlice'
import collectionReducer from './Features/collectionSlice'
export const store = configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
    }
})