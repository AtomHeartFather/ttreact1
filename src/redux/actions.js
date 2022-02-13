import {CREATE_POST} from './types'
import {FETCH_POSTS} from './types'

export function createPost(post) {
	return {
		type: CREATE_POST,
		payload: post
	}
}

export function fetchPosts() {
	return async dispatch => {
		// const response = await fetch('http://z.bokus.ru/test.json', {mode: 'no-cors'})
		const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
			// headers: {
   //      		'content-type': 'application/json;charset=utf-8',
   //      		'Access-Control-Allow-Origin': '*',
   //      		'Access-Control-Allow-Methods': '*',
   //      		'Access-Control-Allow-Headers': '*'
   //      	}
		
		//console.log(response.json())

		const json = await response.json()
		dispatch({type: FETCH_POSTS, payload: json })
	}
}





// Access-Control-Allow-Origin: https://foo.invalid // Домен с которого идут запросы
// Access-Control-Allow-Credentials: true
// Access-Control-Allow-Headers: "заголовки которые можно отправить на удалённый сервер" 
// // Разрешённые методы
// Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS