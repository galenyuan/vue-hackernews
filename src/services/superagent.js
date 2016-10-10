import superagent from 'superagent/lib/client'
import nprogress from 'nprogress'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export default function request (method, url) {
  nprogress.start()

  return superagent[method](url).set(defaultHeaders).on('end', () => {
    nprogress.done()
  })
}
