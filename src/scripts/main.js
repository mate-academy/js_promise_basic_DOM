'use strict';

const notify = (type, text) => {
  const message = `
    <div class="${type}">
      ${text}
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', message);
};

const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

const onSuccess = (text) => notify('message', text);
const onError = (error) => notify('message error-message', error.message);

promise1.then(onSuccess);
promise2.catch(onError);
