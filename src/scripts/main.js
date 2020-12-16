'use strict';

const resolver = (resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve({
      class: 'message',
      msg: 'Promise was resolved!',
    });
  });
};

const rejector = (resolve, reject) => {
  reject({
    class: 'error-message',
    msg: 'Promise was rejected!',
  });
};

function clickResolver(result) {
  const success = document.createElement('div');

  success.className = result.class;
  success.innerText = result.msg;

  document.body.append(success);
}

const promiseClick = new Promise(resolver);
const promiseReject = new Promise(rejector);

promiseClick
  .then((resolve) => {
    clickResolver(resolve);
  });

promiseReject
  .catch((error) => {
    clickResolver(error);

    setTimeout(() => {
      const msgError = document.querySelector('.' + error.class);

      msgError.style.display = 'none';
    }, 3000);
  });
