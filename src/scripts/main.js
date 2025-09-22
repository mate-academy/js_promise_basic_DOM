'use strict';

(() => {
  const logo = document.querySelector('.logo');

  const handleSuccess = () => {
    const el = document.createElement('div');

    el.className = 'message';
    el.textContent = 'Promise was resolved!';
    document.body.appendChild(el);
  };

  const handleError = () => {
    const el = document.createElement('div');

    el.className = 'message error-message';
    el.textContent = 'Promise was rejected!';
    document.body.appendChild(el);
  };

  const promise1 = new Promise((resolve, reject) => {
    logo.addEventListener('click', () => resolve(), { once: true });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Promise rejected after 3s')), 3000);
  });

  promise1.then(handleSuccess).catch(handleError);
  promise2.then(handleSuccess).catch(handleError);
})();
