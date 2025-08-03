'use strict';

const logo = document.querySelector('.logo');

// ---------- PROMISE 1: resolve on click ----------
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

// ---------- PROMISE 2: reject after 3 seconds ----------
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 2 was rejected'));
  }, 3000);
});

// ---------- SUCCESS HANDLER ----------
function handleSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

// ---------- ERROR HANDLER ----------
function handleError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
