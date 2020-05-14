import { applyMiddleware, combineReducers, createStore } from 'redux'
import { articleReducer } from "./article/reducers"
import { articlesReducer } from "./home/reducers"
import { categoryReducer } from "./category/reducers"
import { mostPopularReducer } from "./most_popular/reducers"
import createSagaMiddleware from "redux-saga"
import rootSaga from "../sagas"
//import "regenerator-runtime/runtime"

//if (rootSaga) { console.log('store rootSaga ' + JSON.stringify(rootSaga.toString())) }

const rootReducer = combineReducers({ articleState: articleReducer, articlesState: articlesReducer, categoryState: categoryReducer, mostPopularState: mostPopularReducer })
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store


