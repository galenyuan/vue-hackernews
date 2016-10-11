import Firebase from 'firebase'
const api = new Firebase('https://hacker-news.firebaseio.com/v0')

export function fetchUser (id) {
  return new Promise((resolve, reject) => {
    api.child('user/' + id).once('value', snapshot => {
      resolve(snapshot.val())
    }, reject)
  })
}
