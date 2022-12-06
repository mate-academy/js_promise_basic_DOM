'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.onclick = () => {
    resolve('Promise was resolved!');
  };
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const implementHtml = (className, tagTxt) => {
  document.body.insertAdjacentHTML(
    'beforeend', `<div class=${className}>${tagTxt}</div>`
  );
};

promise1
  .then(result => {
    implementHtml('message', result);
  })
  .catch(error => {
    implementHtml('error-message', error);
  });

promise2
  .then(result => {
    implementHtml('message', result);
  })
  .catch(error => {
    implementHtml('error-message', error);
  });
