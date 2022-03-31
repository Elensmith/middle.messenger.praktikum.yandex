// function fetchWithRetry(url, options) {
//   console.log(options.retries, 'options')

//   return fetch(url).catch((err) => {
//     if (tries <= 0) {
//       return Promise.reject(err)
//     }

//     const b = {
//       retries: options.retries - 1,
//     }
//     return fetchWithRetry(url, b)
//   })
// }
const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
}
type OPTIONS = {
  method: METHODS
  data?: unknown
}
export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2'

  protected endpoint: string

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`
  }

  public get = (url: string, data = {}) =>
    this.request(this.endpoint + url, { data, method: METHODS.GET })

  public put = (url: string, data = {}) =>
    this.request(this.endpoint + url, { data, method: METHODS.PUT })

  public post = (url: string, data?: Record<string, unknown>) =>
    this.request(this.endpoint + url, { data, method: METHODS.POST })

  public delete = (url: string, data = {}) =>
    this.request(this.endpoint + url, { data, method: METHODS.DELETE })

  // setParams = (url: string, data: any) => {
  //   if (data) {
  //     return `${url}${this.queryStringify(data)}`
  //   }
  //   return ''
  // }

  // setHeaders = (xhr, headers) => {
  //   if (headers) {
  //     Object.keys(headers).forEach((key) => {
  //       xhr.setRequestHeader(key, headers[key])
  //     })
  //   }
  // }

  // queryStringify(params) {
  //   console.log(params)
  //   const qs = Object.keys(params)
  //     .map((key) => `${key}=${params[key]}`)
  //     .join('&')
  //   console.log(typeof qs)
  //   return `?${qs}`
  // }

  request = (url: string, options: OPTIONS = { method: METHODS.GET }) => {
    const { method, data } = options
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      // if (method === METHODS.GET) {
      //   url = this.setParams(url, data)
      // }
      xhr.open(method, url)
      // this.setHeaders(xhr, headers)
      xhr.onreadystatechange = (e) => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response)
          } else {
            reject(xhr.response)
          }
        }
      }
      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject

      xhr.withCredentials = true
      xhr.responseType = 'json'
      if (method === METHODS.GET || !data) {
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send()
      } else if (data instanceof FormData) {
        xhr.send(data)
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(data))
      }
    })
  }
}
