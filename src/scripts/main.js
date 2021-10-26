'use strict';

const promise1 = new Promise(resolve => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise was rejected!')), 3000);
});

promise1.then(result => showMessage(result, 'success-message'));
promise2.catch(result => showMessage(result, 'error-message'));

function showMessage(description, type) {
  const message = document.createElement('div');
  const messageDescription = document.createElement('p');

  message.classList.add('message', type);
  messageDescription.innerText = description;
  message.append(messageDescription);
  document.body.append(message);

  if (type === 'error-message') {
    setTimeout(() => {
      message.hidden = true;
    }, 2000);
  }
}
