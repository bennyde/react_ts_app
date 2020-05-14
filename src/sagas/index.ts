import { takeEvery, put, all, call } from "redux-saga/effects"
import { Article, REQUEST_ARTICLE } from "../redux/article/types"
import { receiveArticle, receiveArticleError } from '../redux/article/actions'
import { Category, REQUEST_CATEGORY } from "../redux/category/types"
import { receiveCategory, receiveCategoryError } from '../redux/category/actions'
import { getFakeArticle, getFakeArticles, getFakeCategory, getFakeMostPopular } from './fake_data_func'
import { receiveArticles, receiveArticlesError } from "../redux/home/actions"
import { REQUEST_ARTICLES } from "../redux/home/types"
import { receiveMostPopular, receiveMostPopularError } from "../redux/most_popular/actions"
import { REQUEST_MOST_POPULAR } from "../redux/most_popular/types"
import { articles } from "./fake_data"
//import "regenerator-runtime/runtime"

function* fetchArticle(api: any): any {
    const id = api.payload
    console.log('SAGA fetchArticle id: ' + id)
    try {
        // const query = `https://www.yourapi.com/api/v1/article=${id}`
        // const article: Article = yield fetch(query).then(result => result.json())
        const article: Article = yield getFakeArticle(id).then((result: Article) => result)
        article.date = formatDate(new Date(article.date))
        console.log('SAGA fetchArticle article: ' + JSON.stringify(article))
        yield put(receiveArticle(article))
    } catch (err) {
        yield put(receiveArticleError({ message: `Error: ${err}` }))
    }
}
function* watchFetchArticle() {
    yield takeEvery(REQUEST_ARTICLE, fetchArticle)
}

function* fetchArticles(api: any): any {
    console.log('SAGA fetchArticles api: ' + JSON.stringify(api))
    const { page, posts_per_page } = api.payload
    try {
        // const query = `https://www.yourapi.com/api/v1/articles`
        // const article: Article = yield fetch(query).then(result => result.json())
        const articles: Article[] = yield getFakeArticles(page, posts_per_page).then((result: Article[]) => result)
        articles.forEach(item => {
            item.date = formatDate(new Date(item.date))
        })
        yield put(receiveArticles(articles))
    } catch (err) {
        yield put(receiveArticlesError({ message: `Error: ${err}` }))
    }
}
function* watchFetchArticles() {
    yield takeEvery(REQUEST_ARTICLES, fetchArticles)
}

function* fetchCategory(api: any): any {
    const categoryName = api.payload
    try {
        // const query = `https://www.yourapi.com/api/v1/category=${categoryName}`
        // const category: Category  = yield fetch(query).then(result => result.json())
        const category: Category = yield getFakeCategory(categoryName).then((result: Category) => result)
        category.articles.forEach(item => {
            item.date = formatDate(new Date(item.date))
        })
        yield put(receiveCategory(category))
    } catch (err) {
        yield put(receiveCategoryError({ message: `Error: ${err}` }))
    }
}
function* watchFetchCategory() {
    yield takeEvery(REQUEST_CATEGORY, fetchCategory)
}

function* fetchMostPopular(api: any): any {
    console.log('---sagas fetchMostPopular api: ' + JSON.stringify(api))
    const num = api.payload
    //console.log('---sagas fetchMostPopular num: ' + num)
    try {
        // const query = `https://www.yourapi.com/api/v1/most_popular`
        // const articles: Article[  = yield fetch(query).then(result => result.json())
        const articles: Article[] = yield getFakeMostPopular(num).then((result: Article) => result)
        articles.forEach(item => {
            item.date = formatDate(new Date(item.date))
        })
        yield put(receiveMostPopular(articles))
    } catch (err) {
        yield put(receiveMostPopularError({ message: `Error: ${err}` }))
    }
}
function* watchFetchMostPopular() {
    yield takeEvery(REQUEST_MOST_POPULAR, fetchMostPopular)
}

export default function* rootSaga() {
    yield all([
        call(watchFetchArticle),
        call(watchFetchArticles),
        call(watchFetchCategory),
        call(watchFetchMostPopular)
    ])
}

function formatDate(date: Date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const day = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()
    return day + ' ' + monthNames[monthIndex] + ' ' + year
}