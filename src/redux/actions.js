import {CREATE_POST, REQUEST_POSTS, FETCH_POSTS} from './types'

export function createPost(post) {
	return {
		type: CREATE_POST,
		payload: post
	}
}

export function fetchPosts() {
	return {
		type: REQUEST_POSTS
	}
	// return async dispatch => {

	// 	const proxyUrl = 'https://cors.eu.org/'
	// 	const targetUrl = 'http://z.bokus.ru/test.json'

	// 	const response = await fetch(proxyUrl + targetUrl)
	// 	// const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')  //рабочий вариант

	// 	//console.log(response.json())

	// 	const json = await response.json()
	// 	dispatch({type: FETCH_POSTS, payload: json })
	// }
}





// Access-Control-Allow-Origin: https://foo.invalid // Домен с которого идут запросы
// Access-Control-Allow-Credentials: true
// Access-Control-Allow-Headers: "заголовки которые можно отправить на удалённый сервер" 
// // Разрешённые методы
// Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS