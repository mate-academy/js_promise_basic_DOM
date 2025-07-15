'use strict';

const logo = document.querySelector('.logo');

// Promise 1 - resolved on click
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

// ✅ Poprawiona Promise 2 - rejection z Error
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!')); // Użyj obiektu Error
  }, 3000);
});

// Handlery
const handleSuccess = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
};

const handleError = (error) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = error.message; // Użyj `.message`, bo mamy obiekt Error
  document.body.appendChild(div);
};

// Obsługa
promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
