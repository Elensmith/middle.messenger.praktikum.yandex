import { expect } from 'chai'
import router from './Router'
import Route from './Route'
import Error from '../../pages/error/index'

describe('router', () => {
  it('router is singleton', () => {
    expect(router).to.be.a('object')
  })

  it('router use add to array', () => {
    router.use('/path', Error)
    router.use('/path', Error)
    expect(router.routes).to.have.length(1)
  })

  it('route instanceof Route', () => {
    expect(router.routes[0]).to.be.an.instanceof(Route)
  })

  it('router getRoute return route', () => {
    router.use('/path', Error)
    expect(router.getRoute('/path')).to.have.property('_pathname', '/path')
  })

  it('router getRoute return undefined', () => {
    router.use('/path', Error)
    expect(router.getRoute('/test')).to.be.an('undefined')
  })
})
