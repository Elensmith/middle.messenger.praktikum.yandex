import { expect } from 'chai'
import EventBus from './EventBus'

let eventBus: EventBus
let event: string

describe('EventBus', () => {
  eventBus = new EventBus()
  function callback() {
    console.log('text')
  }

  beforeEach(() => {
    event = 'click'
  })

  it('on event types', () => {
    eventBus.on(event, callback)
    expect(event).to.be.a('string')
    expect(callback).to.be.a('function')
  })

  it('on event is only one', () => {
    eventBus.on(event, callback)
    eventBus.on(event, callback)
    eventBus.emit(event, callback)
    expect(Object.keys(eventBus.listeners)).to.have.length(1)
  })

  it('on event 2 listeners', () => {
    eventBus.on(event, callback)
    eventBus.on('mouseover', callback)
    expect(Object.keys(eventBus.listeners)).to.have.length(2)
  })

  // it('off event', () => {
  //   eventBus.off('input', callback)
  //   expect(eventBus.listeners[event]).to.have.length(2)
  // })
})
