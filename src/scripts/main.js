'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const message = document.createElement('div');

message.classList.add('message');

const badResult = function (content) {
  message.classList.add('error-message');

  message.textContent = content;
  body.append(message);

  return message;
};

const goodResult = function (content) {
  message.classList.toggle('error-message', false);
  message.textContent = content;
  body.append(message);

  return message;
};

const promise1 = new Promise((resolve, reject) => {
  logo.onclick = (e) => {
    logo.dataset.click = 'click';

    if (logo.hasAttribute('data-click')) {
      logo.removeAttribute('data-click');
      resolve(`Promise was resolved!`);
    } else {
      const error = `Promise was rejected!`;

      reject(error);
    }
  };
});

const promise2 = new Promise((resolve, reject) => {
  const error = `Promise was rejected!`;

  reject(error);
});

promise1.then(
  (success) => goodResult(success),
  (error) => badResult(error),
);

promise2.catch((error) => {
  setTimeout(() => {
    badResult(error);
  }, 3000);
});
