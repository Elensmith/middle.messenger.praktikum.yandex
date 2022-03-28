import '../modal.scss'
import closeIcon from '../../../assets/close.svg'

export default `
  <div class="modal-window">
    <div class="modal-window__content">
      {{{ButtonWithIcon buttonClass="button__close" onClick=modalWindowClose iconSrc="${closeIcon}" }}}
      <h2>{{title}}</h2>
      {{{Input labelText=inputLabel classInput="input_main" typeName="text" inputName="login" }}}
      {{{Button title=buttonName className="button_large" onClick=saveClick }}}
    </div>
  </div>
`
