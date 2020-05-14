import { Article } from '../article/types'
import { Error, REQUEST_MOST_POPULAR, RECEIVE_MOST_POPULAR, RECEIVE_MOST_POPULAR_ERROR } from "./types"

export function requestMostPopular() {
    console.log('ACTION REQUEST_MOST_POPULAR CALLED')
    return {
        type: REQUEST_MOST_POPULAR
    }
}

export function receiveMostPopular(articles: Article[]) {
    console.log('ACTION RECEIVE_MOST_POPULAR CALLED title: ' + articles)
    return {
        type: RECEIVE_MOST_POPULAR,
        payload: articles
    }
}

export function receiveMostPopularError(error: Error) {
    //console.log('ACTION RECEIVE_MOST_POPULAR_ERROR CALLED error: ' + JSON.stringify(error))
    return {
        type: RECEIVE_MOST_POPULAR_ERROR,
        payload: error
    }
}
