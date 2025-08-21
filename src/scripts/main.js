'use strict';

const showMessage = (text, className) => {
  const newDiv = document.createElement('div');

  newDiv.className = className;
  newDiv.innerText = text;

  document.body.append(newDiv);
};

const resolvedPromise = () =>
  new Promise((resolve) => {
    const logoElement = document.querySelector('.logo');
    const text = 'Promise was resolved!';

    logoElement.addEventListener('click', () => resolve(text));
  });

resolvedPromise().then((text) => {
  showMessage(text, 'message');
});

const rejectedPromise = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, ms);
  });

rejectedPromise(3000).catch((text) => {
  showMessage(text, 'message error-message');
});
