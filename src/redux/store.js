import {configureStore, combineReducers} from '@reduxjs/toolkit'
import paymentSlice from './paymentSlice'
import appSlice from './appSlice'


const rootReducers = combineReducers({
    payment: paymentSlice.reducer,
    app: appSlice.reducer
})


const store = configureStore({
    reducer: rootReducers
})

export default store