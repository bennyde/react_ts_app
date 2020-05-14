import {
    ArticleState,
    REQUEST_ARTICLE,
    RECEIVE_ARTICLE,
    RECEIVE_ARTICLE_ERROR,
    ArticleActionTypes
} from "./types"

const initialState: ArticleState = {
    id: '0',
    article: null,
    isFetching: false,
    error: null
}

export function articleReducer(state = initialState, action: ArticleActionTypes): ArticleState {
    switch (action.type) {
        case REQUEST_ARTICLE:
            console.log('REDUCER REQUEST_ARTICLE CALLED id: ' + action.payload)
            return Object.assign({}, state, {
                id: action.payload,
                isFetching: true,
                error: null
            });
        case RECEIVE_ARTICLE:
            console.log('REDUCER RECEIVE_ARTICLE CALLED state: ' + JSON.stringify(action.payload))
            return Object.assign({}, state, {
                article: action.payload,
                isFetching: false
            });
        case RECEIVE_ARTICLE_ERROR:
            //console.log('REDUCER RECEIVE_ARTICLE_ERROR CALLED ' + JSON.stringify(action.payload))
            return Object.assign({}, state, {
                id: '0',
                article: null,
                error: action.payload,
                isFetching: false
            });
        default:
            return state
    }
}
