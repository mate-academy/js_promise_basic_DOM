'use strict';

const logo = document.querySelector('.logo');

const promiseResolved = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promiseRejected = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error), 3000);
});

function onSuccess() {
  const tempDiv = document.createElement('div');

  tempDiv.className = 'message';
  tempDiv.innerHTML = 'Promise was resolved!';

  document.body.insertAdjacentElement('beforeend', tempDiv);
};

function onError() {
  const tempDiv2 = document.createElement('div');

  tempDiv2.className = 'message error-message';
  tempDiv2.innerHTML = 'Promise was rejected!';

  document.body.insertAdjacentElement('beforeend', tempDiv2);
}

promiseResolved
  .then(onSuccess)
  .catch();

promiseRejected
  .then()
  .catch(onError);
