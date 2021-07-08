'use strict';

const logo = document.querySelector('.logo');

// create div for our messages
function getCreateMessage(className, message) {
  const div = document.createElement('div');

  div.className = className;
  div.innerText = message;

  return div;
}

const promiseResolve = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(getCreateMessage('message', 'Promise was resolved!'));
  });
});

const promiseReject = new Promise((resolve, reject) => {
  reject(getCreateMessage('error-message message',
    'Promise was rejected!'));
});

promiseResolve.then(
  (result) => document.body.append(result)
);

promiseReject.catch(
  (error) => {
    document.body.append(error);

    setTimeout(() => {
      error.hidden = true;
    }, 3000);
  }
);
