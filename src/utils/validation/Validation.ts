import dictPattern from './validationDict'

class Validation {
  validateInput(input: HTMLInputElement) {
    input.addEventListener('focus', this._focusHandler, true)
    input.addEventListener('blur', this._blurHandler, true)
  }

  _focusHandler(event: FocusEvent) {
    const input: any = event.target
    input.nextElementSibling.textContent = ''
  }

  _blurHandler(event: FocusEvent) {
    const input: any = event.target
    const currInput = dictPattern[input.name]
    const testInput = currInput.regexp.test(input.value)

    if (!testInput) {
      input.nextElementSibling.textContent = currInput.errorText
    }
  }

  submit(form: HTMLFormElement | HTMLElement): Record<string, unknown> {
    const inputBlock: NodeList | null = form.querySelectorAll('.input')
    let isValid = false
    const objectData: any = {}
    if (inputBlock !== null) {
      inputBlock.forEach((i: any) => {
        const el = i
        const input = i.querySelector('input')
        el.querySelector('.error').textContent = ''
        const currInput = dictPattern[input.name]
        const testInput = currInput.regexp.test(input.value)

        if (!testInput) {
          el.querySelector('.error').textContent = currInput.errorText
        } else {
          // eslint-disable-next-line no-lonely-if
          if (input.name === 'password1') {
            if (input.value !== objectData.password) {
              el.querySelector('.error').textContent = 'пароль не совпадает'
            } else {
              objectData[input.name] = input.value
            }
          } else {
            objectData[input.name] = input.value
          }
        }
      })

      if (Object.keys(objectData).length === inputBlock.length) {
        console.log(objectData, 'objectData')
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
