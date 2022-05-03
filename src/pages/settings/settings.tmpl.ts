import './settings.scss'

export default `
<div class="settings">
  {{{ Button title="Назад" className="button_back-to-chat" onClick=backToChat }}}
  <div class="user-form">
    {{{ModalWithInput inputLabel=inputLabel buttonName=buttonName title=modalTitle saveClick=saveModalBtn modalWindowClose=modalWindowClose }}}
    <img class="avatar" src={{avatar}} alt="" />
    {{#if isNotEditable}}
      <h3 class="user-name">{{first_name}}</h3>
    {{/if}}
    <form id="userSettings">
      {{#if editPassword}}
        {{{Input labelText="Старый пароль" classInput="input_main" typeName="password" inputName="oldPassword" }}}
        {{{Input labelText="Новый пароль" classInput="input_main" typeName="password" inputName="password" }}}
        {{{Input labelText="Новый пароль (еще раз)" classInput="input_main" typeName="password" inputName="password1" }}}
        {{{ Button title="Сохранить" className="button_large" typeName="submit" onClick=saveUserPassword }}} 
      {{else}}
        {{{Input labelText="Почта" classInput="input_main" valueData=email typeName="email" inputName="email" }}}
        {{{Input labelText="Логин" classInput="input_main" valueData=login typeName="text" inputName="login" }}}
        {{{Input labelText="Имя" classInput="input_main" valueData=first_name typeName="text" inputName="first_name" }}}
        {{{Input labelText="Фамилия" classInput="input_main" valueData=second_name typeName="text" inputName="second_name" }}}
        {{{Input labelText="Имя пользователя" classInput="input_main" valueData=display_name typeName="text" inputName="display_name" }}}
        {{{Input labelText="Телефон" classInput="input_main" valueData=phone typeName="text" inputName="phone" }}}
        {{#if isNotEditable}}
          {{{ Button title="Изменить данные" className="button_small" onClick=editUserData }}}
          {{{ Button title="Изменить аватар" className="button_small" onClick=editUserAvatar }}}
          {{{ Button title="Изменить пароль" className="button_small" onClick=editUserPassword }}}
          {{{ Button title="Выйти" className="button_small" onClick=logout }}}
        {{else}}
          {{{ Button title="Сохранить" className="button_large" typeName="submit" onClick=saveUserData }}} 
        {{/if}}
      {{/if}}

    </form>
  </div>
 </div>
`
