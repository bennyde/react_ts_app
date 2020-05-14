import {
    ArticlesState,
    REQUEST_ARTICLES,
    RECEIVE_ARTICLES,
    RECEIVE_ARTICLES_ERROR,
    ArticlesActionTypes
} from "./types"

const initialState: ArticlesState = {
    articles: null,
    isFetching: false,
    error: null,
    page: 1,
    posts_per_page: 12
}

export function articlesReducer(state = initialState, action: ArticlesActionTypes): ArticlesState {
    switch (action.type) {
        case REQUEST_ARTICLES:
            //console.log('REDUCER REQUEST_ARTICLES CALLED')
            return Object.assign({}, state, {
                isFetching: true,
                error: null,
                page: action.payload.page,
                posts_per_page: action.payload.posts_per_page
            });
        case RECEIVE_ARTICLES:
            //console.log('REDUCER RECEIVE_ARTICLES CALLED state: ' + JSON.stringify(action.payload))
            return Object.assign({}, state, {
                articles: action.payload,
                isFetching: false
            });
        case RECEIVE_ARTICLES_ERROR:
            //console.log('REDUCER RECEIVE_ARTICLES_ERROR CALLED ' + JSON.stringify(action.payload))
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
