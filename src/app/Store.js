
import { createStore, applyMiddleware } from "redux"
import rootReducer from "./Reducer"
import thunk from "redux-thunk"

export default function configureStore() {

    let store = createStore(rootReducer, applyMiddleware(thunk)) // create store sử dụng thunk
    return store
}