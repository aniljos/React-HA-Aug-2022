import {createStore, combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {gadgetReducer} from './gadgetReducer';

export const store 
        = createStore(
            combineReducers({auth: authReducer, gadgets: gadgetReducer}),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());