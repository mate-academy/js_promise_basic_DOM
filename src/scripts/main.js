'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise is is created!');
  });

  document.addEventListener('click', () => {
    reject(new Error());
  });
});

function getMessage(message, classMessage) {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.innerText = message;
  div.className = classMessage;
  body.lastElementChild.before(div);
};

promise1
  .then(message => {
    getMessage(message, 'message');
  })
  .catch(reject => {
    getMessage('Promise was rejected!', 'message error-message');
  });

const promise2 = new Promise((resolve, reject) => {
  reject(new Error());
});

promise2
  .then(message => {
    getMessage(message, 'message');
  })
  .catch(reject => {
    setTimeout(() => {
      getMessage('Promise was rejected!', 'message error-message');
    }, 2000);
  });
