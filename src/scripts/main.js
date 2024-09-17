'use strict';

const logo = document.querySelector('.logo');

const getResult = function (content) {
  const body = document.querySelector('body');
  const message = document.createElement('div');

  message.classList.add('message');

  if (content.addInfo) {
    message.classList.add(content.addInfo);
  }

  message.textContent = content.message;
  body.append(message);

  return message;
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    logo.dataset.click = 'click';

    if (logo.hasAttribute('data-click')) {
      resolve({
        message: `Promise was rejected!`,
      });
    } else {
      const error = {
        message: `Promise was rejected!`,
        addInfo: 'error-message',
      };

      reject(error);
    }
  });
});

promise1
  .then((success) => {
    getResult(success);
  })
  .catch((error) => {
    getResult(error);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = {
      message: `Promise was rejected!`,
      addInfo: 'error-message',
    };

    reject(error);
  }, 3000);
});

promise2.catch((dataError) => getResult(dataError));

