'use strict';

const logo = document.querySelector('.logo');

new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
}).then(text => addMessage(text, ''));

new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
}).catch(text => addMessage(text, 'error-message'));

function addMessage(message, messageClass = '') {
  document.body.insertAdjacentHTML('beforeend', `
    <div class='message ${messageClass}'>${message}</div>
  `);
}
