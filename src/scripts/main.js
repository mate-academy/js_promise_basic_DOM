'use strict';

const logo = document.querySelector('.logo');

function notification(notifClass) {
  const container = document.createElement('div');

  container.className = notifClass;

  container.textContent = (notifClass === 'error-message')
    ? 'Promise was rejected!'
    : 'Promise was resolved!';

  logo.parentNode.append(container);
}

const firstPromise = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('message');
  });
});
const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('error-message');
  }, 3000);
});

firstPromise.then(notClass => notification(notClass));
secondPromise.catch(notClass => notification(notClass));
