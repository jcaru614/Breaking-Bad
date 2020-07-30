import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { reducer } from './reducer';
import rootReducer from './combineReducers'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export default store;