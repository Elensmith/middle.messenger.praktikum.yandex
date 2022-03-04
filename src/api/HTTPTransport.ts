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

class HTTPTransport {
  get = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.GET })

  put = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.PUT })

  post = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.POST })

  delete = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.DELETE })

  setParams = (url, data) => {
    if (data) {
      return `${url}${this.queryStringify(data)}`
    }
    return ''
  }

  setHeaders = (xhr, headers) => {
    if (headers) {
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key])
      })
    }
  }

  queryStringify(params) {
    console.log(params)
    // Можно делать трансформацию GET-параметров в отдельной функции
    // const qs = new URLSearchParams(data).toString();
    const qs = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&')
    console.log(typeof qs)
    return `?${qs}`
  }

  request = (url, options, timeout = 5000) => {
    const { method, data, headers = {} } = options
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      if (method === METHODS.GET) {
        url = this.setParams(url, data)
      }
      xhr.open(method, url)
      xhr.timeout = timeout
      this.setHeaders(xhr, headers)
      xhr.onload = function () {
        resolve(xhr)
      }
      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject

      if (method === METHODS.GET || !data) {
        xhr.send()
      } else {
        xhr.send(data)
      }
    })
  }
}
