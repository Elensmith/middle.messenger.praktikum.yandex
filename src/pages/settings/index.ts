import SettingsPage from './settings'
import { withStore } from '../../utils/withStore'

const withUser = withStore((state) => ({ ...state.currentUser }))

export default withUser(SettingsPage)
