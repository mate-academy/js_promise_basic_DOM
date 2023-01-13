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

promise1.then(resolve => {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.innerText = resolve;
  div.className = 'message';
  body.lastElementChild.before(div);
}).catch(reject => {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.innerText = 'Promise was rejected!';
  div.className = 'error-message';
  body.lastElementChild.before(div);
});

const promise2 = new Promise((resolve, reject) => {
  reject(Error);
});

promise2.then(resolve => {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.innerText = resolve;
  div.className = 'message';
  body.lastElementChild.before(div);
}).catch(reject => {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  setTimeout(() => {
    div.innerText = 'Promise was rejected!';
    div.className = 'error-message';
    body.lastElementChild.before(div);
  }, 2000);
});
