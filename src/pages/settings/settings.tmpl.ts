import './settings.scss'
import Button from '../../components/button/button'
import Input from '../../components/input/index'

export default `
<div class="settings">
 ${Button({
   title: 'Назад',
   className: 'button_back-to-chat',
   id: 'backToChatBtn',
 })}
  <div class="user-form">
  <span class="avatar"></span>
  {{#if isNotEditable}}
  <h3 class="user-name">{{userName}}</h3>
  {{/if}}
  {{#if isNotEditable}}
  {{#each user}}
    ${Input({
      labelText: '{{this.label}}',
      placeholder: '',
      valueData: '{{this.value}}',
      classInput: 'input_main',
      type: 'text',
      readonly: true,
      inputName: '',
      pattern: '//',
      error: '',
    })}
    {{/each}}
    {{else}}
    {{#each user}}
    ${Input({
      labelText: '{{this.label}}',
      placeholder: '',
      valueData: '{{this.value}}',
      classInput: 'input_main',
      type: 'text',
      inputName: '',
      pattern: '//',
      error: '',
    })}
    {{/each}}
    {{/if}}
    {{#if isNotEditable}}
    ${Button({
      title: 'Изменить данные',
      className: 'button_small',
      id: 'editUserInfo',
    })}
    ${Button({
      title: 'Изменить пароль',
      className: 'button_small',
      id: 'editUserPassword',
    })}
    ${Button({
      title: 'Выйти',
      className: 'button_small',
      id: 'logOutBtn',
    })}
    {{else}}
    ${Button({
      title: 'Сохранить',
      className: 'button_large',
      id: 'saveEditedInfo',
    })}
    {{/if}}
  </div>
  </div>
`
