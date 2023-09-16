'use strict';

function resolver1(resolve, reject) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
};

function resolver2(resolve, reject) {
  setTimeout(() => reject(), 3000);
};

const promise1 = new Promise(resolver1);
const promise2 = new Promise(resolver2);

promise1
  .then(() => appendMessage('success'))
  .catch(() => appendMessage('error'));

promise2
  .then(() => appendMessage('success'))
  .catch(() => appendMessage('error'));

function appendMessage(result) {
  const div = document.createElement('div');

  div.className = 'message';

  if (result === 'success') {
    div.innerText = 'Promise was resolved!';
  } else {
    div.innerText = 'Promise was rejected!';

    div.classList.add('error-message');
  }

  document.body.append(div);
}
