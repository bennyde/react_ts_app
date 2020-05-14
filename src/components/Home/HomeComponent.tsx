import * as React from "react"
import { Link } from "react-router-dom"
import { ArticlesState } from '../../redux/home/types'
import { Article } from '../../redux/article/types'
import { requestArticles } from '../../redux/home/actions'
import { useSelector, useDispatch } from 'react-redux'
import MostPopularComponent from '../MostPopular/MostPopularComponent'

const HomeComponent = () => {

    let articles: Article[] = []
    let page: number = 1
    const articlesState: ArticlesState = useSelector((state: any) => state.articlesState)
    if ((articlesState) && (articlesState.articles)) {
        ({ articles, page } = articlesState)
    }

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(requestArticles())
    }, [])

    const nextPage = () => {
        dispatch(requestArticles(page - 1))
    }
    const prevPage = () => {
        dispatch(requestArticles(page + 1))
    }

    return (
        <div className="section home">
            <div className="left-column">
                <h1>Latest Stories</h1>
                <div className="grid">
                    <ul>
                        {articles.map((item: Article, index: number) => (
                            <li key={index}>
                                <Link to={`/article/${item.id}`}>
                                    <span>
                                        <img src={item.image} alt="" />
                                        <h3>{item.category}</h3>
                                        <h2>{item.title}</h2>
                                        <p>{item.excerpt}</p>
                                        <p>{item.date}</p>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pagination-links">
                    {articles.length >= articlesState.posts_per_page && <div id="older_articles" onClick={prevPage}><h3><span>&laquo;</span> Older Articles</h3></div>}
                    {page > 1 && (<div id="newer_articles" onClick={nextPage}><h3>Newer Articles <span>&raquo;</span></h3></div>)}
                </div>
            </div>
            <div className="right-column">
                <MostPopularComponent />
            </div>
        </div >
    )
}

export default HomeComponent
