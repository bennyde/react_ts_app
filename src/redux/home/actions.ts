import { Article } from '../article/types'
import { Error, REQUEST_ARTICLES, RECEIVE_ARTICLES, RECEIVE_ARTICLES_ERROR } from "./types"

export function requestArticles(page: number = 1, posts_per_page: number = 12) {
    //console.log('ACTION REQUEST_ARTICLES CALLED')
    return {
        type: REQUEST_ARTICLES,
        payload: { page, posts_per_page }
    }
}

export function receiveArticles(articles: Article[]) {
    //console.log('ACTION RECEIVE_ARTICLE CALLED title: ' + articles)
    return {
        type: RECEIVE_ARTICLES,
        payload: articles
    }
}

export function receiveArticlesError(error: Error) {
    //console.log('ACTION RECEIVE_ARTICLE_ERROR CALLED error: ' + JSON.stringify(error))
    return {
        type: RECEIVE_ARTICLES_ERROR,
        payload: error
    }
}
