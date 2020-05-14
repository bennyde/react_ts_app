import { Category, Error, REQUEST_CATEGORY, RECEIVE_CATEGORY, RECEIVE_CATEGORY_ERROR } from "./types"

export function requestCategory(name: string) {
    //console.log('ACTION REQUEST_CATEGORY CALLED category ' + name)
    return {
        type: REQUEST_CATEGORY,
        payload: name
    }
}

export function receiveCategory(category: Category) {
    //console.log('ACTION RECEIVE_ARTICLE CALLED title: ' + article.title)
    return {
        type: RECEIVE_CATEGORY,
        payload: category
    }
}

export function receiveCategoryError(error: Error) {
    //console.log('ACTION RECEIVE_ARTICLE_ERROR CALLED error: ' + JSON.stringify(error))
    return {
        type: RECEIVE_CATEGORY_ERROR,
        payload: error
    }
}
