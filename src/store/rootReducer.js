import { combineReducers } from 'redux'
import generalReducer from 'thunks/genral/reducers'

const rootReducer = combineReducers({
  generalState:generalReducer
})

export default rootReducer