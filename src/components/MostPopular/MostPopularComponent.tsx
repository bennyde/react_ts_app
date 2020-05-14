import * as React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Article } from '../../redux/article/types'
import { MostPopularState, Error } from '../../redux/most_popular/types'
import { requestMostPopular } from '../../redux/most_popular/actions'

const MostPopularComponent = (props: any) => {
    let articles: Article[] = []
    const mostPopularState: MostPopularState = useSelector((state: any) => state.mostPopularState)
    if ((mostPopularState) && (mostPopularState.articles)) {
        ({ articles } = mostPopularState)
    }

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(requestMostPopular())
    }, [])

    return (
        <div className="most-popular">
            <h1>Most Popular</h1>
            <ol>
                {articles.map((item: Article, index: number) => (
                    <li key={index}>
                        <Link to={`/article/${item.id}`}>
                            <h2>{item.title}</h2>
                            <h3>{item.viewed} views</h3>
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default MostPopularComponent