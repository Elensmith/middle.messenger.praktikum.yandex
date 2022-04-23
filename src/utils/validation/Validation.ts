import DICT_PATTERNS from './validationDict'
import store from '../store/Store'

class Validation {
  validateInput(input: HTMLInputElement) {
    input.addEventListener('focus', this._focusHandler, true)
    input.addEventListener('blur', this._blurHandler, true)
  }

  private _focusHandler(event: FocusEvent) {
    const input: any = event.target
    input.nextElementSibling.textContent = ''
    if (store.getState().errorMessage !== '') {
      store.set('errorMessage', '')
    }
  }

  private _blurHandler(event: FocusEvent) {
    const input: any = event.target
    const currentInput = DICT_PATTERNS[input.name]
    const isValidInput = currentInput.regexp.test(input.value)

    if (!isValidInput) {
      input.nextElementSibling.textContent = currentInput.errorText
    }
  }

  submit(form: HTMLFormElement | HTMLElement): Record<string, unknown> {
    const inputBlocks: NodeList | null = form.querySelectorAll('.input')
    let isValid = false
    const objectData: any = {}
    if (inputBlocks.length > 0) {
      inputBlocks.forEach((inputBlock: any) => {
        const input = inputBlock.querySelector('input')
        inputBlock.querySelector('.input__error').textContent = ''
        const currentInput = DICT_PATTERNS[input.name]
        const isValidInput = currentInput.regexp.test(input.value)

        if (!isValidInput) {
          inputBlock.querySelector('.input__error').textContent =
            currentInput.errorText
        } else {
          // eslint-disable-next-line no-lonely-if
          if (input.name === 'password1') {
            if (input.value !== objectData.password) {
              inputBlock.querySelector('.input__error').textContent =
                'пароль не совпадает'
            } else {
              objectData[input.name] = input.value
            }
          } else {
            objectData[input.name] = input.value
          }
        }
      })

      if (Object.keys(objectData).length === inputBlocks.length) {
        if (objectData.password1) {
          delete objectData.password1
        }
        isValid = true
      }
    }
    return {
      isValid,
      objectData,
    }
  }
}
const validation = new Validation()
export default validation
