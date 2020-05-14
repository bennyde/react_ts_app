
// Action types
export const REQUEST_ARTICLE: any = 'REQUEST_ARTICLE'
export const RECEIVE_ARTICLE: any = 'RECEIVE_ARTICLE'
export const RECEIVE_ARTICLE_ERROR: any = 'RECEIVE_ARTICLE_ERROR'

// Action interfaces
interface RequestArticleAction {
    type: typeof REQUEST_ARTICLE
    payload: string
}

interface ReceiveArticleAction {
    type: typeof RECEIVE_ARTICLE
    payload: Article
}

interface ReceiveArticleErrorAction {
    type: typeof RECEIVE_ARTICLE_ERROR
    payload: Error
}

export type ArticleActionTypes = ReceiveArticleAction | RequestArticleAction | ReceiveArticleErrorAction

// State interfaces
export interface Article {
    id: string
    title: string
    excerpt: string
    content: string
    author: string
    image: string
    date: string
    category: string
    viewed: Number
}

export interface Error {
    message: string
}

export interface ArticleState {
    id: string
    article: Article
    isFetching: boolean
    error: Error
}

