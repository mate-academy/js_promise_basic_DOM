'use strict';

const showMessage = (result) => {
  const success = document.createElement('div');

  success.className = result.class;
  success.innerText = result.msg;

  document.body.append(success);
};

const resolver = (resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve({
      class: 'message',
      msg: 'Promise was resolved!',
    });
  });
};

const rejector = (resolve, reject) => {
  setTimeout(() => {
    reject({
      class: 'error-message',
      msg: 'Promise was rejected!',
    });
  }, 3000);
};

const promiseClick = new Promise(resolver);
const promiseReject = new Promise(rejector);

promiseClick
  .then((resolve) => {
    showMessage(resolve);
  });

promiseReject
  .catch((error) => {
    showMessage(error);

    setTimeout(() => {
      const msgError = document.querySelector('.' + error.class);

      msgError.style.display = 'none';
    }, 3000);
  });
