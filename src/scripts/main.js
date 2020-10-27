'use strict';

const getResolve = () => {
  return new Promise((resolve) => {
    document.addEventListener('click', () => {
      resolve('success');
    });
  });
};

const getReject = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('smth went wrong'));
    }, 5000);
  });
};

const success = getResolve();
const fail = getReject();

success.then((res) => res);
fail.catch((err) => err);
