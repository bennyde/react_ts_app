import { call, put, take } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import { Article, REQUEST_ARTICLE, RECEIVE_ARTICLE } from '../redux/article/types'
import { receiveArticle, receiveArticleError } from '../redux/article/actions'
import { Category, REQUEST_CATEGORY, RECEIVE_CATEGORY } from '../redux/category/types'
import { receiveCategory, receiveCategoryError } from '../redux/category/actions'
import { getFakeArticle, getFakeCategory, categorySport } from './fake_data_func'
import { articles } from './fake_data'
//import "regenerator-runtime/runtime"


describe('Redux-Saga Tests', () => {

    it('fetches an article with a provided id', () => {

        // action
        const api = {
            type: REQUEST_ARTICLE,
            payload: '7'
        };

        // saga
        function* fetchArticle(api: any): any {
            console.log('---sagas fetchArticle api: ' + JSON.stringify(api))
            const id = api.payload
            console.log('---sagas fetchArticle id: ' + id)
            try {
                //const query = `https://www.yourapi.com/api/v1/article=${id}`
                //const article: Article = yield fetch(query).then(result => result.json())
                const article: Article = yield getFakeArticle(id).then((result: Article) => result)
                yield put(receiveArticle(article))
            } catch (err) {
                yield put(receiveArticleError({ message: `Error: ${err}` }))
            }
        }

        // test
        return expectSaga(fetchArticle, api)
            .dispatch(api)
            .put({ type: RECEIVE_ARTICLE, payload: articles[6] })
            .run();
    })

    it('fetches a category with a provided name', () => {

        // action
        const api = {
            type: REQUEST_CATEGORY,
            payload: 'sport'
        };

        // saga
        function* fetchCategory(api: any): any {
            //console.log('---sagas fetchCategory api: ' + JSON.stringify(api))
            const categoryName = api.payload
            //console.log('---sagas fetchCategory categoryName: ' + categoryName)
            try {
                // const query = `https://www.yourapi.com/api/v1/category=${categoryName}`
                // const category: Category  = yield fetch(query).then(result => result.json())
                const category: Category = yield getFakeCategory(categoryName).then((result: Category) => result)
                yield put(receiveCategory(category))
            } catch (err) {
                yield put(receiveCategoryError({ message: `Error: ${err}` }))
            }
        }

        // The payload for the RECEIVE_CATEGORY action
        const payload: Category = {
            name: 'sport',
            articles: categorySport
        }

        // test
        return expectSaga(fetchCategory, api)
            .dispatch(api)
            .put({ type: RECEIVE_CATEGORY, payload })
            .run();
    })
})