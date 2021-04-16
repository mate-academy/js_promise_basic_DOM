'use strict';

const logo = document.querySelector('.logo');

function notification(notifClass) {
  const notif = document.createElement('div');

  notif.className = notifClass;

  notif.textContent = (notifClass === 'error-message')
    ? 'Promise was rejected!'
    : 'Promise was resolved!';

  logo.parentNode.append(notif);

  if (notifClass === 'error-message') {
    setTimeout(() => {
      notif.remove();
    }, 3000);
  }
}

logo.addEventListener('click', () => {
  return new Promise((resolve, reject) => {
    resolve(notification('message'));
    reject(notification('error-message'));
  });
});
