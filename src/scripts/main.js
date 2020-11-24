'use strict';

const body = document.querySelector('body');

const logoPromise = () => {
  return new Promise((resolve, reject) => {
    body.addEventListener('click', e => {
      if (e.target.nodeName === 'H1') {
        resolve('this is our logo');
      } else {
        setTimeout(() => reject(new Error('this is not a logo')), 5000);
      }
    });
  });
};

function successCallback(result) {
  // eslint-disable-next-line no-console
  console.log('Успішно завершено з результатом ' + result);
}

function failureCallback(error) {
  // eslint-disable-next-line no-console
  console.log('Завершено з помилкою ' + error);
}

logoPromise()
  .then(successCallback, failureCallback);
