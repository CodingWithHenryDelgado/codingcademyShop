// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux';
// Import the slice reducers here.
import { inventoryReducer } from '../features/inventory/inventorySlice.js'
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice.js'
import { cartReducer } from '../features/cart/cartSlice.js'
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js'
// Create and export the store here.
export const store = createStore(combineReducers({
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
  inventory: inventoryReducer,
  searchTerm: searchTermReducer
}))