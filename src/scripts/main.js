'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(
    (result) => {
      const msg = document.createElement('div');

      msg.classList.add('message');
      msg.innerText = result;
      document.body.append(msg);
    }
  );

promise2.catch(
  (error) => {
    const errorMsg = document.createElement('div');

    errorMsg.classList.add('error-message');
    errorMsg.innerText = error;
    document.body.append(errorMsg);
  }
);
