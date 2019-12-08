import { createStore, applyMiddleware, compose } from "redux";
import { createLogger }  from 'redux-logger'
import thunk from "redux-thunk";
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
middleware.push(createLogger());

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

export default store