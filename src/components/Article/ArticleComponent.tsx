import * as React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { ArticleState, Error } from '../../redux/article/types'
import { requestArticle } from '../../redux/article/actions'
import { RouteComponentProps } from 'react-router-dom';

const ArticleComponent = (props: RouteComponentProps) => {
	let title, excerpt, content, author, date, image

	const articleState: ArticleState = useSelector((state: any) => state.articleState)
	if (articleState && articleState.article) {
		({ title, excerpt, content, author, date, image } = articleState.article)
	}

	const dispatch = useDispatch()

	React.useEffect(() => {
		try {
			const params: any = props.match.params
			dispatch(requestArticle(params.id))
		} catch (e) {
			console.log('Error: ' + e)
		}
	}, [])

	if (articleState && articleState.error) {
		const error: Error = articleState.error
		return (
			<div className="section article theme-santafe">
				<p>ERROR</p>
				<p>{error.message}</p>
			</div>
		)
	}

	if (articleState && articleState.isFetching) {
		return (
			<div className="section article theme-santafe">
				<p>LOADING...</p>
			</div>
		)
	}

	return (
		<div className="section article">
			<div className="article-content">
				<h1>{title}</h1>
				<img src={image} alt="image" />
				<p>{author}</p>
				<p>{date}</p>
				<p>{excerpt}</p>
				<p>{content}</p>
			</div>
		</div>
	)
}

export default ArticleComponent
