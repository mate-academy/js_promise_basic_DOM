'use strict';

const getResolve = () => {
  return new Promise((resolve) => {
    resolve('success');
  });
};

const getReject = () => {
  return new Promise((resolve, reject) => {
    reject(new Error('fail'));
  });
};

const success = getResolve();

const fail = getReject();

document.addEventListener('click', () => {
  success.then((res) => res);
});

setTimeout(() => {
  fail.catch((err) => err);
}, 5000);
