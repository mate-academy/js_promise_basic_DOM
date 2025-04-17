'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

promise1
  .then(() => {
    const mes = document.createElement('div');

    mes.className = 'message';
    mes.textContent = 'Promise was resolved!';

    document.body.appendChild(mes);
  })
  .catch(() => {
    const mes = document.createElement('div');

    mes.className = 'message error-message';
    mes.textContent = 'Promise was rejected!';

    document.body.appendChild(mes);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise2 was rejected'));
  }, 3000);
});

promise2
  .then(() => {
    const mes = document.createElement('div');

    mes.className = 'message';
    mes.textContent = 'Promise was resolved!';

    document.body.appendChild(mes);
  })
  .catch(() => {
    const mes = document.createElement('div');

    mes.className = 'message error-message';
    mes.textContent = 'Promise was rejected!';

    document.body.appendChild(mes);
  });
