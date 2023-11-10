// import userReducer from './userSlice';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';
import { createStore, applyMiddleware, Store } from 'redux';
import rootReducer from './rootReducer';
const sagaMiddleware = createSagaMiddleware();
import { composeWithDevTools } from 'redux-devtools-extension';
export const store: Store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )

);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
