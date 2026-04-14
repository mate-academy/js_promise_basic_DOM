'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener(
      'click',
      () => {
        resolve();
      },
      { once: true },
    );
  } else {
    reject(new Error('Logo element not found'));
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout reached'));
  }, 3000);
});

const successHandler = () => {
  const msg = document.createElement('div');

  msg.className = 'message';
  msg.textContent = 'Promise was resolved!';
  document.body.append(msg);
};

const errorHandler = () => {
  const msg = document.createElement('div');

  msg.className = 'message error-message';
  msg.textContent = 'Promise was rejected!';
  document.body.append(msg);
};


promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
