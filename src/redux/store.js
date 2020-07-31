import { createStore, applyMiddleware } from 'redux';
import rootReducer from './combineReducers'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export default store;