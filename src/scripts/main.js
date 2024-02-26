'use strict';

function addMessageBox(hasSucceeded, promiseNr) {
  const newEl = document.createElement('div');

  newEl.classList.add('message');

  if (!hasSucceeded) {
    newEl.classList.add(hasSucceeded ? ' ' : 'error-message');
  }

  newEl.appendChild(
    document.createTextNode(
      `promise${promiseNr} has ${hasSucceeded ? 'succeeded' : 'failed'}`,
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
    }, 1000);
  });
};

promise1().then(
  () => {
    addMessageBox(true, 1);
  },
  () => {
    addMessageBox(false, 1);
  },
);

promise2().then(
  () => {
    addMessageBox(true, 2);
  },
  () => {
    addMessageBox(false, 2);
  },
);

// write your code here
