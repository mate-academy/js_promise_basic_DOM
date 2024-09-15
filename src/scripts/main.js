'use strict';

function addMessage(type) {
  const newEl = document.createElement('div');

  newEl.classList.add('message');

  switch (type) {
    case 'error':
      newEl.classList.add('error-message');
      break;
    default:
      break;
  }

  newEl.appendChild(
    document.createTextNode(
      `Promise was ${type === 'success' ? 'resolved' : 'rejected'}!`,
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
    addMessage('success');
  },
  () => {
    addMessage('error');
  },
);

promise2().then(
  () => {
    addMessage('success');
  },
  () => {
    addMessage('error');
  },
);
