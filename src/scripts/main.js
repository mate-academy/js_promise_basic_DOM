'use strict';

const logo = document.querySelector('.logo');
let id;
let resolveLogo;

if (!logo) {
} else {
  const promise2 = new Promise((resolve, reject) => {
    id = setTimeout(() => reject(new Error('Timeout')), 3000);
  });

  promise2.catch(() => {
    const div1 = document.createElement('div');

    div1.className = 'message error-message';
    div1.innerHTML = 'Promise was rejected!';
    document.body.appendChild(div1);
  });

  const promise1 = new Promise((resolve) => {
    resolveLogo = resolve;
  });

  logo.addEventListener('click', () => {
    clearTimeout(id);
    resolveLogo();
  });

  promise1.then(() => {
    const div2 = document.createElement('div');

    div2.className = 'message';
    div2.innerHTML = 'Promise was resolved!';
    document.body.appendChild(div2);
  });
}
