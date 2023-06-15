'use strict';

const logoClickedMessage = 'Logo clicked';
const timeGone = 'Time gone';

const resolver = (resolve, reject) => {
  let clickedLogo = false;

  document.getElementsByClassName('logo')[0].addEventListener('click', () => {
    clickedLogo = true;
    resolve(logoClickedMessage);
  });

  setTimeout(() => {
    if (!clickedLogo) {
      reject(timeGone);
    }
  }, 3000);
};

const promise1 = new Promise(resolver);
const promise2 = new Promise(resolver);

function addHandler(promise) {
  promise.then(result => {
    if (result === logoClickedMessage) {
      const divResolved = '<div class="message">Promise was resolved!</div>';

      document.body.innerHTML += divResolved;
    }
  }).catch(result => {
    if (result === timeGone) {
      // eslint-disable-next-line max-len
      const divRejected = `<div class="message error-message">Promise was rejected!</div>`;

      document.body.innerHTML += divRejected;
    }
  });
}

addHandler(promise1);
addHandler(promise2);
