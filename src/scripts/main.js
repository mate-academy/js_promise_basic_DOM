'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');
  const message = document.createElement('div');

  message.className = 'message';

  const clickHandle = () => {
    const text = 'Promise was resolved!';

    message.append(text);

    resolve(message);

    logo.removeEventListener('click', clickHandle);
  };

  logo.addEventListener('click', clickHandle);
});

const promise2 = new Promise((resolve, reject) => {
  const message = document.createElement('div');

  message.className = 'message';
  message.classList.add('error-message');

  const text = 'Promise was rejected!';

  message.append(text);

  setTimeout(() => reject(message), 3000);
});

promise1.then((result) => {
  document.body.append(result);
});

promise2.catch((result) => {
  document.body.append(result);
});
