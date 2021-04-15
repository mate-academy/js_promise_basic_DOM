'use strict';

const logo = document.querySelector('.logo');

const createElement = (className, innerText) => {
  const element = document.createElement('div');

  element.className = className;
  element.innerText = innerText;

  return element;
};

new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    document.body.append(
      createElement('message', 'Promise was resolved!')
    );

    resolve();
  });
}).then(() => {
  // eslint-disable-next-line no-console
  console.log('Promise was resolved!');
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    document.body.append(
      createElement('message error-message', 'Promise was rejected!')
    );

    reject(new Error('Promise was rejected!'));
  }, 3000);
}).catch(error =>
  // eslint-disable-next-line no-console
  console.log(error)
);
