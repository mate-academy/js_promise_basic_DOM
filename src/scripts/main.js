'use strict';

function clickResolve(resolve) {
  document.addEventListener('click', () => {
    resolve();
  });
};

function timerResolve(_, reject) {
  setTimeout(() => {
    reject();
  }, 5000);
};

const clickPromise = new Promise(clickResolve);
const timerPromise = new Promise(timerResolve);

// eslint-disable-next-line no-console
clickPromise.then(() => console.log('Resolve clickPromise'));

// eslint-disable-next-line no-console
timerPromise.catch(() => console.log('Reject timerPromise'));
