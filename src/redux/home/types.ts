import { Article } from '../article/types'

// Action types
export const REQUEST_ARTICLES: any = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES: any = 'RECEIVE_ARTICLES'
export const RECEIVE_ARTICLES_ERROR: any = 'RECEIVE_ARTICLES_ERROR'

interface RequestArticlesAction {
    type: typeof REQUEST_ARTICLES,
    payload: any
}

interface ReceiveArticlesAction {
    type: typeof RECEIVE_ARTICLES
    payload: Article[]
}

interface ReceiveArticlesErrorAction {
    type: typeof RECEIVE_ARTICLES_ERROR
    payload: Error
}

export type ArticlesActionTypes = ReceiveArticlesAction | RequestArticlesAction | ReceiveArticlesErrorAction


export interface Error {
    message: string
}

export interface ArticlesState {
    articles: Article[]
    isFetching: boolean
    error: Error,
    page: number,
    posts_per_page: number
}

