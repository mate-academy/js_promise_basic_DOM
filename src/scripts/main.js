'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

promise1
  .then(res => {
    const divSuccess = document.createElement('div');

    divSuccess.setAttribute('class', 'message');
    divSuccess.textContent = res;
    document.body.append(divSuccess);
  });

promise2
  .catch(err => {
    const divError = document.createElement('div');

    divError.setAttribute('class', 'message error-message');
    divError.textContent = err;
    document.body.append(divError);
  });
