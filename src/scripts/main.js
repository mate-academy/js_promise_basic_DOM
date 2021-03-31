'use strict';

const logoButton = document.querySelector('.logo');

function firstPromise() {
  return new Promise((resolve, reject) => {
    logoButton.addEventListener('click', () => {
      resolve('Promise has been successfully resolved');
    });

    setTimeout(() => {
      reject(new Error('Promise has been failed'));
    }, 3000);
  });
}

const handleSuccessNotification = (message) => {
  return logoButton.insertAdjacentHTML('afterend', `
    <div class = 'message'>${message}</div>
  `);
};

firstPromise().then(handleSuccessNotification)
  .catch((errorMessage) => {
    return logoButton.insertAdjacentHTML('afterend', `
      <div class = 'error-message'>${errorMessage}</div>
    `);
  });
