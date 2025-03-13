'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  const promise1 = new Promise((resolve) => {
    logo.addEventListener('click', resolve);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Promise rejected!')), 3000);
  });

  function appendMessage(text, isError) {
    const div = document.createElement('div');

    div.className = 'message' + (isError ? ' error-message' : ``);
    div.textContent = text;
    document.body.appendChild(div);
  }

  const handleSuccess = () => appendMessage('Promise was resolved!', false);
  const handleError = () => appendMessage('Promise was rejected!', true);

  promise1.then(handleSuccess).catch(handleError);
  promise2.then(handleSuccess).catch(handleError);
});
