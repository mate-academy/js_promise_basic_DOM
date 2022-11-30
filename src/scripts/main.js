'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('h1');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((resolvedText) => makeANotification('message', resolvedText));

promise2.catch((errorText) => makeANotification('message error-message',
  errorText));

function makeANotification(classType, text) {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', `
        <div class="${classType}"> 
          <h2>
            ${text}
          </h2>
        </div>
      `);
}
