import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore,applyMiddleware} from "redux"
import rootReducers from './reducers'
const middleware = applyMiddleware(thunk)
const enhancer = composeWithDevTools(middleware)


const store = createStore(rootReducers,enhancer)

export default store;