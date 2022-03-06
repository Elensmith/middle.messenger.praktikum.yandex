import tmpl from './settings.tmpl'
import Block from '../../components/utils/Block'

interface SettingsProps {
  // user: any
  userName: string
  isNotEditable: boolean
  logout: () => void
  onClick?: () => void
}
export default class SettingsPage extends Block {
  constructor(props: SettingsProps) {
    super({ ...props })
  }

  render() {
    return tmpl
  }
}
