'use strict';

// write your code here
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});
const divLogo = document.getElementsByClassName('logo')[0];

divLogo.addEventListener('click', () => {
  const promise1 = new Promise((resolve) => {
    resolve('Promise was resolved!');
  });

  promise1.then((text) => {
    const div = document.createElement('div');

    div.classList.add('message');

    div.innerText = text;

    document.body.appendChild(div);
  });
});

promise2.then(
  () => {},
  (text) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');

    div.innerText = text;

    document.body.appendChild(div);
  },
);
