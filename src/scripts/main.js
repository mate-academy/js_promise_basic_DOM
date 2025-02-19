'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((text) => {
  addMessage(text);
});

promise2.catch((error) => {
  const messageError = addMessage(error.message);

  messageError.classList.add('error-message');
});

function addMessage(text) {
  const messageCont = document.createElement('div');

  messageCont.classList.add('message');
  messageCont.textContent = text;
  document.body.appendChild(messageCont);

  return messageCont;
}
