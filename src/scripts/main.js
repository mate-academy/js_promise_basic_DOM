'use strict';

const logo = document.querySelector('.logo');

const promise1 = () => {
  return new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 3000);
  });
};

const onResolve = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerText = 'Promise was resolved!';

  document.body.append(message);
};

const onReject = () => {
  const message = document.createElement('div');

  message.classList.add('error-message');
  message.innerText = 'Promise was rejected!';

  document.body.append(message);
};

promise1()
  .then(onResolve);

promise2()
  .catch(onReject);
