import { Article, Error, REQUEST_ARTICLE, RECEIVE_ARTICLE, RECEIVE_ARTICLE_ERROR } from "./types"

export function requestArticle(id: string) {
    console.log('ACTION REQUEST_ARTICLE CALLED id ' + id)
    return {
        type: REQUEST_ARTICLE,
        payload: id
    }
}

export function receiveArticle(article: Article) {
    console.log('ACTION RECEIVE_ARTICLE CALLED title: ' + article.title)
    return {
        type: RECEIVE_ARTICLE,
        payload: article
    }
}

export function receiveArticleError(error: Error) {
    //console.log('ACTION RECEIVE_ARTICLE_ERROR CALLED error: ' + JSON.stringify(error))
    return {
        type: RECEIVE_ARTICLE_ERROR,
        payload: error
    }
}
