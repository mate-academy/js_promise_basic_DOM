'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout'));
  }, 3000);
});

function showResolvedMessage() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';

  document.body.append(div);
}

function showRejectedMessage() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';

  document.body.append(div);
}

promise1.then(showResolvedMessage);
promise1.catch(showRejectedMessage);

promise2.then(showResolvedMessage);
promise2.catch(showRejectedMessage);
