import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import countModule, {
  initialState as countInitialState
} from './modules/countModule';
import rootSaga from './middleware/rootSaga';

const rootReducer = combineReducers({
  count: countModule.reducer
});

export const preloadedState = () => {
  return {
    count: countInitialState
  };
};

const sagaMiddleWare = createSagaMiddleware();

const createStore = (preloadedStateFunc: Function) => {
  const middlewareList = [...getDefaultMiddleware(), logger, sagaMiddleWare];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedStateFunc()
  });

  sagaMiddleWare.run(rootSaga);

  return store;
};

export default createStore;
