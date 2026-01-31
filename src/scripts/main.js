'use strict';

const logo = document.querySelector('.logo');

// promise1 — виконується по кліку на .logo
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

// promise2 — відхиляється через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

// універсальні обробники
function onResolve() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function onReject() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

// обробники для promise1
promise1.then(onResolve).catch(onReject);

// обробники для promise2
promise2.then(onResolve).catch(onReject);
