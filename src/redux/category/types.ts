import { Article } from '../article/types'

// Action types
export const REQUEST_CATEGORY: string = 'REQUEST_CATEGORY'
export const RECEIVE_CATEGORY: string = 'RECEIVE_CATEGORY'
export const RECEIVE_CATEGORY_ERROR: string = 'RECEIVE_CATEGORY_ERROR'

interface RequestCategoryAction {
    type: typeof REQUEST_CATEGORY
    payload: string
}

interface ReceiveCategoryAction {
    type: typeof RECEIVE_CATEGORY
    payload: Array<Article>
}

interface ReceiveCategoryErrorAction {
    type: typeof RECEIVE_CATEGORY_ERROR
    payload: Error
}

export type CategoryActionTypes = ReceiveCategoryAction | RequestCategoryAction | ReceiveCategoryErrorAction

// State
export interface Category {
    name: string
    articles: Array<Article>
}

export interface Error {
    message: string
}

export interface CategoryState {
    category: Category
    isFetching: boolean
    error: Error
}

