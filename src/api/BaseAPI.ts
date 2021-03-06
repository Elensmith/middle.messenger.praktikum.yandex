import HTTPTransport from './HTTPTransport'

export default class BaseAPI {
  protected http: HTTPTransport

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint)
  }
}
