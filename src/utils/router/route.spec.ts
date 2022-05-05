import { expect } from 'chai'
import Route from './Route'

let route: Route

describe('Route class', () => {
  route = new Route()

  it('route is not singleton', () => {
    expect(route).to.be.a('object')
  })
})
