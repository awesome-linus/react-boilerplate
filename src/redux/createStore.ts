import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import countModule from './modules/countModule';
import rootSaga from './middleware/rootSaga';

const rootReducer = combineReducers({
  count: countModule.reducer
});

const sagaMiddleWare = createSagaMiddleware();

const createStore = () => {
  const middlewareList = [...getDefaultMiddleware(), logger, sagaMiddleWare];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production'
  });

  sagaMiddleWare.run(rootSaga);

  return store;
};

export default createStore;
