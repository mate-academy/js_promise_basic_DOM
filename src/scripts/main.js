'use strict';

const logo = document.querySelector('.logo');

function notification(notifClass) {
  const notif = document.createElement('div');

  notif.className = notifClass;

  notif.textContent = (notifClass === 'error-message')
    ? 'Promise was rejected!'
    : 'Promise was resolved!';

  logo.parentNode.append(notif);
}

logo.addEventListener('click', () => {
  return new Promise(resolve => {
    resolve('message');
  })
    .then(notClass => notification(notClass));
});

setTimeout(() => {
  // eslint-disable-next-line promise/param-names
  return new Promise(reject => reject('error-message'))
    .then(notClass => notification(notClass));
}, 3000);
