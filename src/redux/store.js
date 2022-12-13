import {createStore, applyMiddleware} from "redux";
import { reducers } from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSage from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middleware))

sagaMiddleware.run(rootSage);

export default store;
