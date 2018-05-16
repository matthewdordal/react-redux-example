import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducer from './reducers';

const middlewares = []; // redux middleware goes here

export default function configureStore () {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middlewares))
    );
}
