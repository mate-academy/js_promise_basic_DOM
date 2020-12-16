'use strict';

// write your code here

const logo = document.querySelector('.logo');
const resolvedContainer = document.createElement('div');
const rejectedContainer = document.createElement('div');

const resolver = (resolve) => {
  document.addEventListener('click', () => {
    resolve('resolve promise result');
  });
};

const rejecter = (_, reject) => {
  setTimeout(() => {
    return reject('reject promise result');
  }, 5000);
};

const newResolvePromise = new Promise(resolver);
const newRejectPromise = new Promise(rejecter);

newRejectPromise.catch(result => {
  rejectedContainer.innerText = result;
});

newResolvePromise.then(result => {
  resolvedContainer.innerText = result;
});

logo.before(resolvedContainer);
logo.after(rejectedContainer);
