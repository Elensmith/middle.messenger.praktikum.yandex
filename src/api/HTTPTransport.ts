const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
}
type Options = {
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

  request = (url: string, options: Options = { method: METHODS.GET }) => {
    const { method, data } = options
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.withCredentials = true
      xhr.onreadystatechange = () => {
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
