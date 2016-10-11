import Firebase from 'firebase'
import promise from './Promise'
const api = new Firebase('https://hacker-news.firebaseio.com/v0')

export function fetchUser (id) {
  return promise((resolve, reject) => {
    api.child('user/' + id).once('value', snapshot => {
      resolve(snapshot.val())
    }, reject)
  })
}
