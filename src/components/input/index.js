import Handlebars from 'handlebars'
import tmpl from './input.tmpl'

const template = Handlebars.compile(tmpl)
const makeTemp = (data) => template(data)

export default makeTemp