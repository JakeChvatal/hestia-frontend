import { createStore, combineReducers } from 'redux';
import rootReducer from './src/reducers/rootReducer';

export default function configureStore() {
    return createStore(rootReducer, initialState); 
} 