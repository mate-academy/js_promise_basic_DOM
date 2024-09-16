'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const getResult = function (content) {
  const message2 = document.createElement('div');

  message2.classList.add('message');

  if (content.addInfo) {
    message2.classList.add(content.addInfo);
  }

  message2.textContent = content.message;
  body.append(message2);

  return message2;
};

const promise1 = new Promise((resolve, reject) => {
  logo.onclick = (e) => {
    logo.dataset.click = 'click';

    if (logo.hasAttribute('data-click')) {
      logo.removeAttribute('data-click');

      const success = {
        message: `Promise was resolved!`,
      };

      resolve(success);
    } else {
      const error = {
        message: `Promise was rejected!`,
        addInfo: 'error-message',
      };

      reject(error);
    }
  };
});

const promise2 = new Promise((resolve, reject) => {
  const error = {
    message: `Promise was rejected!`,
    addInfo: 'error-message',
  };

  reject(error);
});

promise1.then(
  (success) => getResult(success),
  (error) => getResult(error),
);

promise2.catch((error, addInfo) => {
  setTimeout(() => {
    getResult(error);
  }, 3000);
});

