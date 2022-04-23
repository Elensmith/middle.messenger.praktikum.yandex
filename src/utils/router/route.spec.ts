import { expect } from 'chai'
import router from './Router'
import Route from './Route'
import Block from '../mainDOM/Block'
import Error from '../../pages/error/index'

let route: Route

describe('Route class', () => {
  route = new Route()

  it('route is not singleton', () => {
    expect(route).to.be.a('object')
  })

  // it('_block is typeof Block', () => {
  //   expect(route.routes).to.have.length(1)
  // })
})
