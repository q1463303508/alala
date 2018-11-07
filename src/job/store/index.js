import {createStore, applyMiddleware} from "redux"
import reducer from './reducer'
import createSaga from 'redux-saga'
import rootSaga from './sagas'
const sagaMiddle = createSaga();// 创建一个Saga中间件

// let initstate = {}
// let reducer = (state, action) => {
//     return {...state}
// }
// let store = createStore(reducer,initstate)
const store = createStore(reducer, applyMiddleware(sagaMiddle));
sagaMiddle.run(rootSaga)
window.store = store

export default store