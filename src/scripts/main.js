'use strict';

const pushMessage = (description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');

  message.className = 'message';
  message.classList.add(type);
  message.innerText = description;

  body.append(message);
};

const logo = document.querySelector('.logo');
const successExecution = new Promise(resolve => (
  logo.addEventListener('click', () => resolve('Promise was resolved!'))
));

successExecution.then(value => pushMessage(value, 'message'));

const errorExecution = new Promise(
  (resolve, reject) => setTimeout(() => reject(new Error()), 3000)
);

errorExecution.catch(() => pushMessage(
  'Promise was rejected!', 'error-message')
);
