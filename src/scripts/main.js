'use strict';

// write your code here
const logo = document.querySelector('.logo');

function addMessage(result, text, error) {
  const message = document.createElement('div');

  message.className = result;
  message.innerText = text;
  document.body.append(message);

  if (error) {
    setTimeout(() => {
      message.remove();
    }, 3000);
  }
}

const succesePromise = new Promise(resolve => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

succesePromise.then(successe => addMessage('message', successe));

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

rejectPromise.catch(() => {
  addMessage('error-message', 'Promise was rejected!', 'error');
});
