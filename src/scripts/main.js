'use strict';

const logo = document.querySelector('.logo');

// promise1 — виконається при кліку на .logo
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('clicked');
  });
});

// promise2 — відхилиться через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('timeout')); // тепер передаємо Error
  }, 3000);
});

// функція для відображення повідомлень
function showMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = 'message' + (isError ? ' error-message' : '');
  div.textContent = text;
  document.body.appendChild(div);
}

// обробники для promise1
promise1
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch(() => {
    showMessage('Promise was rejected!', true);
  });

// обробники для promise2
promise2
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch(() => {
    showMessage('Promise was rejected!', true);
  });
