'use strict';

function addMessageBox(hasSucceeded) {
  const newEl = document.createElement('div');

  newEl.classList.add('message');

  if (!hasSucceeded) {
    newEl.classList.add(hasSucceeded ? ' ' : 'error-message');
  }

  newEl.appendChild(
    document.createTextNode(
      `Promise was ${hasSucceeded ? 'resolved' : 'rejected'}!`,
    ),
  );
  document.querySelector('body').appendChild(newEl);
}

const logoElement = document.querySelector('.logo');

const promise1 = () => {
  return new Promise((resolve, reject) => {
    return logoElement.addEventListener(
      'click',
      () => {
        resolve();
      },
      { once: true },
    );
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject(new Error('Time is up!'));
    }, 3000);
  });
};

promise1().then(
  () => {
    addMessageBox(true);
  },
  () => {
    addMessageBox(false);
  },
);

promise2().then(
  () => {
    addMessageBox(true);
  },
  () => {
    addMessageBox(false);
  },
);

// write your code here
