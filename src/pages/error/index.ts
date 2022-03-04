import Block from '../../components/utils/Block'
import tmpl from './error.tmpl'

interface ErrorProps {
  errorCode: number
  errorText: string
}
export default class ErrorPage extends Block {
  constructor(props: ErrorProps) {
    super({ ...props, onClick: () => console.log('ErrorPage') })
  }

  render() {
    return tmpl
  }
}
