import DICT_PATTERNS from './validationDict'
import store from '../store/Store'

interface IsValid {
  isValid: boolean
  objectData: Record<string, unknown>
}

class Validation {
  validateInput(input: HTMLInputElement) {
    input.addEventListener('focus', this._focusHandler, true)
    input.addEventListener('blur', this._blurHandler, true)
  }

  private _focusHandler(event: FocusEvent) {
    const input: any = event.target
    input.nextElementSibling.textContent = ''
    const errorMessageContent = store.getState().errorMessage
    if (errorMessageContent || errorMessageContent !== '') {
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

  submit(form: Element): IsValid {
    const inputBlocks: NodeList | null = form.querySelectorAll('.input')
    let isValid = false
    const objectData: Record<string, unknown> = {}
    inputBlocks.forEach((inputBlock: HTMLDivElement) => {
      const input = inputBlock.querySelector('input')
      if (input !== null) {
        const inputErrorElement = inputBlock.querySelector('.input__error')
        if (inputErrorElement !== null) inputErrorElement.textContent = ''
        const currentInput = DICT_PATTERNS[input.name]
        const isValidInput = currentInput.regexp.test(input.value)
        if (!isValidInput) {
          if (inputErrorElement !== null)
            inputErrorElement.textContent = currentInput.errorText
        } else {
          // eslint-disable-next-line no-lonely-if
          if (input.name === 'password1') {
            if (input.value !== objectData.password) {
              if (inputErrorElement !== null)
                inputErrorElement.textContent = 'пароль не совпадает'
            } else {
              objectData[input.name] = input.value
            }
          } else {
            objectData[input.name] = input.value
          }
        }
      }
    })

    if (Object.keys(objectData).length === inputBlocks.length) {
      if (objectData.password1) {
        delete objectData.password1
      }
      isValid = true
    }
    return {
      isValid,
      objectData,
    }
  }
}
const validation = new Validation()
export default validation
