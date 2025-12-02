'use strict';

const promise1 = new Promise(function (resolve, reject) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', resolve);
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('Ооооой!')), 3000);
});

const handle = (text, classList) => {
  const div1 = document.createElement('div');

  document.body.appendChild(div1);

  classList.forEach((element) => {
    div1.classList.add(element);
  });
  div1.textContent = text;
};

promise1.then(() => {
  handle('Promise was resolved!', ['message']);
});

promise1.catch(() => {
  handle('Promise was rejected!', ['message', 'error-message']);
});

promise2.then(() => {
  handle('Promise was resolved!', ['message']);
});

promise2.catch(() => {
  handle('Promise was rejected!', ['message', 'error-message']);
});
