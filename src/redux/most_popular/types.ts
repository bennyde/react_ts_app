import { Article } from '../article/types'

// Action types
export const REQUEST_MOST_POPULAR: any = 'REQUEST_MOST_POPULAR'
export const RECEIVE_MOST_POPULAR: any = 'RECEIVE_MOST_POPULAR'
export const RECEIVE_MOST_POPULAR_ERROR: any = 'RECEIVE_MOST_POPULAR_ERROR'

interface RequestMostPopularAction {
    type: typeof REQUEST_MOST_POPULAR,
    payload: null
}

interface ReceiveMostPopularAction {
    type: typeof RECEIVE_MOST_POPULAR
    payload: Article[]
}

interface ReceiveMostPopularErrorAction {
    type: typeof RECEIVE_MOST_POPULAR_ERROR
    payload: Error
}

export type MostPopularActionTypes = RequestMostPopularAction | ReceiveMostPopularAction | ReceiveMostPopularErrorAction


export interface Error {
    message: string
}

export interface MostPopularState {
    articles: Article[]
    isFetching: boolean
    error: Error
}

