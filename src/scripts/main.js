'use strict';

function addMessage(isSuccess) {
  const newEl = document.createElement('div');

  newEl.classList.add('message');

  if (!isSuccess) {
    newEl.classList.add(isSuccess ? ' ' : 'error-message');
  }

  newEl.appendChild(
    document.createTextNode(
      `Promise was ${isSuccess ? 'resolved' : 'rejected'}!`,
    ),
  );
  document.querySelector('body').appendChild(newEl);
}

const logoEl = document.querySelector('.logo');

const promise1 = () => {
  return new Promise((resolve, reject) => {
    return logoEl.addEventListener(
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
    addMessage(true);
  },
  () => {
    addMessage(false);
  },
);

promise2().then(
  () => {
    addMessage(true);
  },
  () => {
    addMessage(false);
  },
);
