import Firebase from 'firebase'
import store from '../store'
import promise from './Promise'

const api = new Firebase('https://hacker-news.firebaseio.com/v0')

export function fetchNewsIdList () {
  return promise((resolve, reject) => {
    if (store.state.ids.length) {
      resolve(store.state.ids)
    } else {
      api.child('topstories').on('value', snapshot => {
        resolve(snapshot.val())
      }, reject)
    }
  })
}

export function fetchNews (id) {
  return promise((resolve, reject) => {
    if (store.state.newsCache[id]) {
      resolve(store.state.newsCache[id])
    } else {
      api.child('item/' + id).once('value', snapshot => {
        const story = store.state.newsCache[id] = snapshot.val()
        resolve(story)
      }, reject)
    }
  })
}

export function fetchNewsList (ids) {
  if (!ids || !ids.length) {
    return Promise.resolve([])
  } else {
    return Promise.all(ids.map(id => fetchNews(id)))
  }
}
