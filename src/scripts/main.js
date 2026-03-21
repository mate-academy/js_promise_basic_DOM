'use strict';

const logo = document.querySelector('.logo');
let resolveLogo;

if (!logo) {
} else {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Timeout')), 3000);
  });

  promise2.then(showSuccess).catch(showError);

  const promise1 = new Promise((resolve, reject) => {
    resolveLogo = resolve;
  });

  logo.addEventListener(
    'click',
    () => {
      if (typeof resolveLogo === 'function') {
        resolveLogo();
      }
    },
    { once: true },
  );

  promise1.then(showSuccess).catch(showError);
}

function showSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.innerHTML = 'Promise was resolved!';
  document.body.appendChild(div);
}

function showError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.innerHTML = 'Promise was rejected!';
  document.body.appendChild(div);
}
