import Block from '../../components/utils/Block'
import tmpl from './error.tmpl'

interface ErrorProps {
  errorCode: number
  errorText: string
  onClick: () => void
}
export default class ErrorPage extends Block {
  constructor(props: ErrorProps) {
    super({ ...props })
  }

  render() {
    return tmpl
  }
}
