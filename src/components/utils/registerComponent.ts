import * as Handlebars from 'handlebars'
import { HelperOptions } from 'handlebars'
import Block from './Block'

export default function registerComponent(Component: typeof Block, name: string) {
  Handlebars.registerHelper(name, ({ hash, data }: HelperOptions) => {
    console.log(name, 'Component.name')
    if (!data.root.children) {
      data.root.children = {}
    }
    const { children } = data.root
    const component = new Component(hash)
    children[component.id] = component
    console.log(Handlebars, 'Handlebars')
    return `<div data-id="id-${component.id}"></div>`
  })
}
