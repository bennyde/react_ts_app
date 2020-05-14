import {
    CategoryState,
    CategoryActionTypes,
    REQUEST_CATEGORY,
    RECEIVE_CATEGORY,
    RECEIVE_CATEGORY_ERROR
} from "./types"

const initialState: CategoryState = {
    category: null,
    isFetching: false,
    error: null
}

export function categoryReducer(state = initialState, action: CategoryActionTypes): CategoryState {
    switch (action.type) {
        case REQUEST_CATEGORY:
            //console.log('REDUCER REQUEST_CATEGORY name: ' + action.payload)
            return Object.assign({}, state, {
                category: { name: action.payload, articles: [] },
                isFetching: true,
                error: null
            });
        case RECEIVE_CATEGORY:
            //console.log('REDUCER RECEIVE_CATEGORY category: ' + JSON.stringify(action.payload))
            return Object.assign({}, state, {
                category: action.payload,
                isFetching: false
            });
        case RECEIVE_CATEGORY_ERROR:
            //console.log('REDUCER RECEIVE_CATEGORY_ERROR ' + JSON.stringify(action.payload))
            return Object.assign({}, state, {
                category: null,
                error: action.payload,
                isFetching: false
            });
        default:
            return state
    }
}
