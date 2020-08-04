import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './combineReducers';
import objSaga from './sagas/objSaga';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([objSaga()])
}

sagaMiddleware.run(rootSaga);

export default store; 