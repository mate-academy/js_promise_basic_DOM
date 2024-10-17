'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const promise1 = new Promise((resolve) => {
    resolve('Promise was resolved!');
  });

  promise1
    .then((message) => {
      const div1 = document.createElement('div');

      div1.classList.add('message');
      div1.textContent = message;
      document.body.appendChild(div1);
    })
    .catch((error) => {
      const div2 = document.createElement('div');

      div2.classList.add('message', 'error-message');
      div2.textContent = error;
      document.body.appendChild(div2);
    });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then((message) => {
    const div1 = document.createElement('div');

    div1.classList.add('message');
    div1.textContent = message;
    document.body.appendChild(div1);
  })
  .catch((error) => {
    const div2 = document.createElement('div');

    div2.classList.add('message', 'error-message');
    div2.textContent = error;
    document.body.appendChild(div2);
  });
