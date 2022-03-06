import dictPattern from './validationDict'

export default class Validation {
  form: any | null

  inputBlock: any | null

  constructor() {
    this.activate = this.activate.bind(this)
    this.submit = this.submit.bind(this)
  }

  activate() {
    this.form = document.querySelector('form')
    if (this.form === null) {
      this.form = document.querySelector('.new-message-box')
    }
    // if (this.form !== null) {
    this.inputBlock = this.form.querySelectorAll('.input')
    this.inputBlock.forEach((input: any) => {
      if (input.querySelector('input').name !== 'message') {
        console.log(input, 'nput.name')
        input.addEventListener('focus', this._focusHandler, true)
        input.addEventListener('blur', this._blurHandler, true)
      }
    })
    // }
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

  submit(): boolean {
    let isValid = false
    const objectData: any = {}

    this.inputBlock.forEach((i: any) => {
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

    if (Object.keys(objectData).length === this.inputBlock.length) {
      console.log(objectData, 'objectData')
      if (objectData.password1) {
        delete objectData.password1
      }
      isValid = true
    }
    return isValid
  }
}
