'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const showSucsess = () => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';

  document.body.append(message);
};

const showError = () => {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';

  document.body.append(message);
};

promise1.then(showSucsess).catch(showError);
promise2.then(showSucsess).catch(showError);
