/* eslint-disable prettier/prettier */
'use strict';

// promise1: resolve на клік по .logo (делегація + один раз)
const promise1 = new Promise((resolve) => {
  // eslint-disable-next-line prettier/prettier
  document.addEventListener('click', (e) => {
    if (e.target.closest('.logo')) {
      resolve();
    }
  },
  { once: true });
});

// promise2: reject через 3 секунди
// eslint-disable-next-line promise/param-names
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

// утиліта для виводу повідомлень у body
function addMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = 'message' + (isError ? ' error-message' : '');
  div.textContent = text;
  document.body.appendChild(div);
}

// обробники для ОБОХ промісів (точні тексти)
promise1
  .then(() => addMessage('Promise was resolved!'))
  .catch(() => addMessage('Promise was rejected!', true));

promise2
  .then(() => addMessage('Promise was resolved!'))
  .catch(() => addMessage('Promise was rejected!', true));

// зробити доступними глобально
window.promise1 = promise1;
window.promise2 = promise2;
