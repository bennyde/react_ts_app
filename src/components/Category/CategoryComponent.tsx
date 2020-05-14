import * as React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { CategoryState } from '../../redux/category/types'
import { requestCategory } from '../../redux/category/actions'
import { Article } from '../../redux/article/types'

const CategoryComponent = (props: any) => {
    let articles: Article[] = []
    const [category, setCategory] = React.useState()

    const categoryState: CategoryState = useSelector((state: any) => state.categoryState)
    if (categoryState && categoryState.category && categoryState.category.articles) {
        ({ articles } = categoryState.category)
    }

    const dispatch = useDispatch()

    React.useEffect(() => {
        console.log('category ' + category)
        setCategory(props.match.params.category)
        dispatch(requestCategory(props.match.params.category))
    }, [props.match.params.category])

    return (
        <div className="section category">
            <h1>{category}</h1>
            <ul>
                {articles.map((item: Article, index: number) => (
                    <li key={index}>
                        <Link to={`/article/${item.id}`}>
                            <h2>{item.title}</h2>
                            <p>{item.excerpt}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryComponent