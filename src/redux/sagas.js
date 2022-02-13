import {takeEvery, call, put} from 'redux-saga/effects'
import {REQUEST_POSTS, FETCH_POSTS} from './types'

export function* sagaWatcher() {
	yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
	const payload = yield call(fetchPosts)
	yield put({ type: FETCH_POSTS, payload })
}

async function fetchPosts() {
		const proxyUrl = 'https://cors.eu.org/'
		const targetUrl = 'http://z.bokus.ru/test.json'
		const response = await fetch(proxyUrl + targetUrl)
		return await response.json()
}
