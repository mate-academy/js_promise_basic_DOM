'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise is is created!');
  });

  document.addEventListener('click', () => {
    reject(Error);
  });
});

function getMassage(message, classMassage) {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.innerText = message;
  div.className = classMassage;
  body.lastElementChild.before(div);
};

promise1.then(resolve => {
  getMassage(resolve, 'message');
}).catch(reject => {
  getMassage('Promise was rejected!', 'error-message');
});

const promise2 = new Promise((resolve, reject) => {
  reject(Error);
});

promise2.then(resolve => {
  getMassage(resolve, 'message');
}).catch(reject => {
  setTimeout(() => {
    getMassage('Promise was rejected!', 'error-message');
  }, 2000);
});
