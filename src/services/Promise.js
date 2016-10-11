import nprogress from 'nprogress'

export default function (callback) {
  const promise = new Promise(callback)
  nprogress.start()
  promise.then(() => {
    nprogress.done()
  })
  return promise
}
