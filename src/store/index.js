import { createStore, applyMiddleware, compose } from "redux";
// import thunk from 'redux-thunk'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(mySagas)

export default store
