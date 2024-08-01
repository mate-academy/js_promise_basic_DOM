'use strict';

const logo = document.querySelector('.logo');
const div = document.createElement('div');

const showMessage = (messages, type) => {
  return new Promise((resolve, reject) => {
    if (type === 'success') {
      resolve(messages[1]);
    }

    if (type === 'error') {
      setTimeout(reject, 3000, messages[0]);
    }
  })
    .then((message) => {
      logo.addEventListener('click', () => {
        div.classList.add('message');
        div.textContent = message;
        document.body.append(div);
      });
    })
    .catch((message) => {
      div.classList.add('message', 'error-message');
      div.textContent = message;
      document.body.append(div);
    });
};

showMessage(['Promise was rejected!', 'Promise was resolved!'], 'success');

showMessage(['Promise was rejected!', 'Promise was resolved!'], 'error');
