import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './RootReducer/RootReducer';

// Most applications have more than one reducer.
// A way to use multiple reducers is to combine all the reducers in one file
// and use the combineReducers function to turn an object whose values are
// different reducing functions into a single reducing function.

const initialState = {};
const middleWare = [thunk];
const store = createStore(
    rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;