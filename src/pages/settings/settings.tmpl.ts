import './settings.scss'

export default `
<div class="settings">
  {{{ Button title="Назад" className="button_back-to-chat" onClick=backToChat }}}
  <div class="user-form">
    <span class="avatar"></span>
    {{#if isNotEditable}}
      <h3 class="user-name">{{first_name}}</h3>
    {{/if}}
    {{{Input labelText="Почта" classInput="input_main" valueData=email typeName="text" }}}
    {{{Input labelText="Логин" classInput="input_main" valueData=login typeName="text" }}}
    {{{Input labelText="Имя" classInput="input_main" valueData=first_name typeName="text" }}}
    {{{Input labelText="Фамилия" classInput="input_main" valueData=second_name typeName="text" }}}
    {{{Input labelText="Имя пользователя" classInput="input_main" valueData=display_name typeName="text" }}}
    {{{Input labelText="Телефон" classInput="input_main" valueData=phone typeName="text" }}}
    {{#if isNotEditable}}
      {{{ Button title="Изменить данные" className="button_small" onClick=editUserData }}}
      {{{ Button title="Изменить пароль" className="button_small" onClick=editUserPassword }}}
      {{{ Button title="Выйти" className="button_small" onClick=logout }}}
    {{else}}
      {{{ Button title="Сохранить" className="button_large" onClick=saveUserData }}} 
    {{/if}}
  </div>
 </div>
`
