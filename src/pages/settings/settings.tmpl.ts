import './settings.scss'

export default `
<div class="settings">
  {{{ Button title="Назад" className="button_back-to-chat" onClick=onClick }}}
  <div class="user-form">
    <span class="avatar"></span>
    {{#if isNotEditable}}
    <h3 class="user-name">{{userName}}</h3>
    {{/if}}
    {{#if isNotEditable}}
    {{#each user}}
    {{{Input labelText="" classInput="input_main" valueData="{{@../this}}" type="text" inputName="" readonly="true" pattern="//"}}}
    {{/each}}
    {{else}}
    {{#each user}}
    {{{Input labelText="{{@../this.label}}" classInput="input_main" valueData="{{@../this.value}}" type="text" inputName="" readonly="true" pattern="//"}}}
    {{/each}}
    {{/if}}
    {{#if isNotEditable}}
    {{{ Button title="Изменить данные" className="button_small" onClick=onClick }}}
    {{{ Button title="Изменить пароль" className="button_small" onClick=onClick }}}
    {{{ Button title="Выйти" className="button_small" onClick=onClick }}}
    {{{ Button title="Сохранить" className="button_large" onClick=onClick }}}
    {{else}}
    {{/if}}
  </div>
  </div>
`
