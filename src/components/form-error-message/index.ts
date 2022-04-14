import ErrorMessage from './form-error-message'
import { withStore } from '../../utils/store/withStore'

const withErrorMessage = withStore((state) => ({
  errorText: state.errorMessage,
}))

export default withErrorMessage(ErrorMessage)
