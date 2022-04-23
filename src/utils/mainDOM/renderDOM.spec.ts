import { expect } from 'chai'
import renderDOM from './renderDOM'
import Block from './Block'
import ErrorPage from '../../pages/error/index'

const jsdom = require('jsdom')

const { JSDOM } = jsdom

const dom = new JSDOM(`<!DOCTYPE html><body><div id="root">rrrrr</div>`)
// const block = new Block()
// const err = new Error('root not found')

// console.log(dom.window.document.querySelector('#root').textContent)
describe('render dom', () => {
  // не работает
  // it('throw error if no root element faild', () => {
  //   expect(renderDOM('#notroot', block)).to.throw(err)
  // })
  // it('set html to root element', () => {
  //   renderDOM('#root', new ErrorPage())
  //   const title = dom.window.document.querySelector('.code')
  //   expect(title).to.be.a('string')
  // })
})
