'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function notification(type, textMessage) {
  const newDiv = document.createElement('div');

  newDiv.className = type;
  newDiv.textContent = textMessage;
  body.append(newDiv);
}

logo.addEventListener('click', function () {
  const promise1 = new Promise(function (resolve) {
    resolve();
  });

  promise1
    .then(() => {
      notification('message', 'Promise was resolved!');
    })
    .catch(() => {
      notification('message error-message', 'Promise was rejected!');
    });
});

const promise2 = new Promise(function (resolve, reject) {
  reject(new Error());
});

promise2.catch(() => {
  setTimeout(() => {
    notification('message error-message', 'Promise was rejected!');
  }, 3000);
});
