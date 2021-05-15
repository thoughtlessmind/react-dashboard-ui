import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'store/rootReducer'

const configureStore = () => {
  let middlewares = [thunk]
  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION__
        ? compose(
            applyMiddleware(...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__({
              trace: true,
              traceLimit: 25
            })
          )
        : compose(applyMiddleware(...middlewares))
      : compose(applyMiddleware(...middlewares))
  )
  return store
}

export default configureStore
