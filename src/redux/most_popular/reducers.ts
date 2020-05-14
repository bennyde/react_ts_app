import {
    MostPopularState,
    REQUEST_MOST_POPULAR,
    RECEIVE_MOST_POPULAR,
    RECEIVE_MOST_POPULAR_ERROR,
    MostPopularActionTypes
} from "./types"

const initialState: MostPopularState = {
    articles: null,
    isFetching: false,
    error: null
}

export function mostPopularReducer(state = initialState, action: MostPopularActionTypes): MostPopularState {
    switch (action.type) {
        case REQUEST_MOST_POPULAR:
            console.log('REDUCER REQUEST_MOST_POPULAR CALLED')
            return Object.assign({}, state, {
                isFetching: true,
                error: null
            });
        case RECEIVE_MOST_POPULAR:
            console.log('REDUCER RECEIVE_MOST_POPULAR CALLED state: ' + JSON.stringify(action.payload))
            return Object.assign({}, state, {
                articles: action.payload,
                isFetching: false
            });
        case RECEIVE_MOST_POPULAR_ERROR:
            console.log('REDUCER RECEIVE_MOST_POPULAR_ERROR CALLED ' + JSON.stringify(action.payload))
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
