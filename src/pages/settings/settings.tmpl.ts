import './settings.scss'

export default `
<div class="settings">
  {{{ Button title="Назад" className="button_back-to-chat" onClick=backToChat }}}
  <div class="user-form">
    <span class="avatar"></span>
    {{#if isNotEditable}}
    <h3 class="user-name">{{userName}}</h3>
    {{/if}}
    {{{Input labelText="Почта" classInput="input_main" valueData="useremail@yandex.ru" typeName="text" readonly="true"}}}
    {{{Input labelText="Логин" classInput="input_main" valueData="ivanlogin" typeName="text" readonly="true"}}}
    {{{Input labelText="Имя" classInput="input_main" valueData="Иван" typeName="text" readonly="true"}}}
    {{{Input labelText="Фамилия" classInput="input_main" valueData="Иванов" typeName="text" readonly="true"}}}
    {{{Input labelText="Имя пользователя" classInput="input_main" valueData="Иван" typeName="text" readonly="true"}}}
    {{{Input labelText="Телефон" classInput="input_main" valueData="+7(123)1567890" typeName="text" readonly="true"}}}
    {{#if isNotEditable}}
    {{{ Button title="Изменить данные" className="button_small" onClick=onClick }}}
    {{{ Button title="Изменить пароль" className="button_small" onClick=onClick }}}
    {{{ Button title="Выйти" className="button_small" onClick=logout }}}
    {{{ Button title="Сохранить" className="button_large" onClick=logout }}}
    {{/if}}
  </div>
 </div>
`
