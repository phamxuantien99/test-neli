import { combineReducers,applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import ToDoListReducer from './reducers/ToDoListReducer'

const rootReducer = combineReducers({
    ToDoListReducer
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk))


export default store