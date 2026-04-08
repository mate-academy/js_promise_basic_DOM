'use strict';

// write your code here
const bodyContainer = document.querySelector('body');

// success call-back
const onSuccess = () => {
  const message = `
    <div class="message">
      Promise was resolved!
    </div>
  `;

  bodyContainer.insertAdjacentHTML('afterbegin', message);
};

// error call-back
const onError = () => {
  const message = `
    <div class="message error-message">
      Promise was rejected!
    </div>
  `;

  bodyContainer.insertAdjacentHTML('afterbegin', message);
};

// promise 1
const promise1 = new Promise((resolve, reject) => {
  const logoItem = document.querySelector('.logo');

  logoItem.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise timeout'));
  }, 3000);
});

promise1.then(onSuccess).catch(onError);
promise2.then(onSuccess).catch(onError);
