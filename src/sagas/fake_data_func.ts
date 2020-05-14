import { Article } from '../redux/article/types'
import { articles } from './fake_data'

export const categorySport = articles.filter((item: any) => item.category === 'sport')
export const categoryTravel = articles.filter((item: any) => item.category === 'travel')
export const categoryRelax = articles.filter((item: any) => item.category === 'relax')

export function getFakeArticle(id: any) {
	const articleId: number = parseInt(id)
	const promise = new Promise((resolve, reject) => {
		setTimeout(function () {
			if ((id > 0) && (id < articles.length)) {
				for (let item of articles) {
					const itemId: number = parseInt(item.id)
					if (itemId === articleId) {
						resolve(item)
					}
				}
			} else {
				reject('article not found')
			}
		}, 100);
	})
	return promise
}

export function getFakeArticles(page: number = 1, posts_per_page = 12) {
	const lastIndex: number = page * posts_per_page
	const firstIndex: number = lastIndex - posts_per_page
	const promise = new Promise((resolve, reject) => {
		setTimeout(function () {
			articles.sort((a: Article, b: Article) => {
				return new Date(b.date).getTime() - new Date(a.date).getTime()
			})
			resolve(articles.slice(firstIndex, lastIndex))
		}, 100);
	})
	return promise
}

export function getFakeCategory(category: string) {
	const promise = new Promise((resolve, reject) => {
		setTimeout(function () {
			if (category) {
				const arr = []
				for (let i of articles) {
					if (i.category === category) {
						arr.push(i)
					}
				}
				resolve({ name: category, articles: arr })
			} else {
				reject('category does not exist')
			}
		}, 100);
	})
	return promise
}

export function getFakeMostPopular(index: Number = 10) {
	const promise = new Promise((resolve, reject) => {
		setTimeout(function () {
			articles.sort((a: any, b: any) => {
				return b.viewed - a.viewed
			})
			let output = []
			if (index > 0 && index < articles.length) {
				output = articles.slice(0, index)
			} else {
				output = articles.slice(0, articles.length - 1)
			}
			resolve(output)
		}, 100);
	})
	return promise
}