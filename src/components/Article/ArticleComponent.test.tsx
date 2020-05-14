// xit - skip test
// fit - focus on only this test

// .skip - skip test
// .only - only this test

import * as React from "react"
// import * as ReactTestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ArticleComponent from "./ArticleComponent"
import { Article, Error } from "../../redux/article/types"
// import { fetchArticle } from "../../store/article/actions"
import { mount, shallow, ShallowWrapper } from "enzyme"
import { RouteComponentProps } from 'react-router-dom'
// import store from "../../redux"
import { requestArticle, receiveArticle, receiveArticleError } from '../../redux/article/actions'
import toJSON from "enzyme-to-json"
import { articles } from '../../sagas/fake_data'

//const act = { renderer };

const props: any = {
    "history": {
        "length": 2,
        "action": "PUSH",
        "location": {
            "pathname": "/article/1",
            "search": "",
            "hash": ""
        }
    },
    "location": {
        "pathname": "/article/1",
        "search": "",
        "hash": ""
    },
    "match": {
        "path": "/article/:id",
        "url": "/article/1",
        "isExact": true,
        "params": {
            "id": "1"
        }
    }
}

const props_2: any = {
    "history": {
        "length": 2,
        "action": "PUSH",
        "location": {
            "pathname": "/article/245",
            "search": "",
            "hash": ""
        }
    },
    "location": {
        "pathname": "/article/245",
        "search": "",
        "hash": ""
    },
    "match": {
        "path": "/article/:id",
        "url": "/article/245",
        "isExact": true,
        "params": {
            "id": "245"
        }
    }
}

test('Test Article object', () => {
    expect(1).toEqual(1)
})

describe.skip('<ArticleComponent />', () => {
    it('renders ArticleComponent with provided props', () => {
        shallow(<Provider store={store}><ArticleComponent {...props} /></Provider >)
    })
    it('matches the snapshot', () => {
        const wrapper: ShallowWrapper = shallow(<Provider store={store}><ArticleComponent {...props} /></Provider >)
        expect(toJSON(wrapper, { noKey: false, mode: 'deep' })).toMatchSnapshot()
        //expect(wrapper.find('ArticleComponent').dive()
    })
    it('updates via props', () => {
        const wrapper: ShallowWrapper = shallow(<Provider store={store}><ArticleComponent {...props} /></Provider >)
        expect(toJSON(wrapper)).toMatchSnapshot()
        wrapper.setProps({ children: <ArticleComponent {...props_2} /> });
        expect(toJSON(wrapper)).toMatchSnapshot()
    })
    it('mounts the component', () => {
        const wrapper = mount(<Provider store={store}><ArticleComponent {...props} /></Provider >)
        console.log(wrapper.debug())
        expect(wrapper.find('ArticleComponent').exists()).toBe(true)
        expect(wrapper.find('ArticleComponent')).toHaveLength(1)
        // expect(wrapper.find('#main').exists()).toBe(true)
    })
})


let store: any
describe.skip('<ArticleComponent /> test actions', () => {

    let component: any
    const mockStore = configureStore([]);
    beforeEach(() => {
        store = mockStore({
            articleState: {
                id: '1',
                article: articles[0],
                isFetching: false,
                error: null
            }
        })
        renderer.act(() => {
            component = renderer.create(
                <Provider store={store}>
                    <ArticleComponent {...props} />
                </Provider>)
        })
    })
    test('should render with given state from Redux store', () => {
        const state = store.getState()
        console.log('state ' + JSON.stringify(state))
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('should dispatch REQUEST_ARTICLE action', () => {
        store.dispatch(requestArticle('1'))
        const actions = store.getActions()
        const expectedPayload = { type: 'REQUEST_ARTICLE', payload: '1' }
        expect(actions[0]).toEqual(expectedPayload)
    })
    test('should dispatch RECEIVE_ARTICLE action', () => {
        store.dispatch(receiveArticle(articles[0]))
        const actions = store.getActions()
        const expectedPayload = { type: 'RECEIVE_ARTICLE', payload: articles[0] }
        expect(actions[1]).toEqual(expectedPayload)
    })
    test('should dispatch RECEIVE_ARTICLE_ERROR action', () => {
        const error: Error = { message: 'Error occurred' }
        store.dispatch(receiveArticleError(error))
        const actions = store.getActions()
        const expectedPayload = { type: 'RECEIVE_ARTICLE_ERROR', payload: error }
        expect(actions[1]).toEqual(expectedPayload)
    })
    it('should update with given state from Redux store', () => {
        store.dispatch(receiveArticle(articles[0]))
        const state = store.getState()
        console.log('state ' + JSON.stringify(state))
        expect(toJSON(component)).toMatchSnapshot()
    })
})


// let component: any
// describe('<ArticleComponent /> connected React-Redux Component', () => {
//     const mockStore = configureStore([]);
//     beforeEach(() => {
//         store = mockStore({
//             articleState: {
//                 id: '1',
//                 article: articles[0],
//                 isFetching: false,
//                 error: null
//             }
//         })
//         component = mount(
//             <Provider store={store}>
//                 <ArticleComponent {...props} />
//             </Provider>
//         )
//     })
//     it('should render with given state from Redux store', () => {
//         expect(toJSON(component)).toMatchSnapshot()
//     })
//     it('should update with given state from Redux store', () => {
//         store.dispatch(receiveArticle(articles[0]))
//         const state = store.getState()
//         console.log('state ' + JSON.stringify(state))
//         expect(toJSON(component)).toMatchSnapshot()
//     })
// })