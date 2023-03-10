'use strict';

// write your code here

const logo = document.querySelector('.logo');
const bd = document.querySelector('body');

logo.addEventListener('click', () => {
  const success = () => new Promise((resolve, reject) => {
    function resolveHandler() {
      const newDiv = document.createElement('div');

      newDiv.className = 'message';
      newDiv.innerText = 'Promise was resolved!';
      bd.appendChild(newDiv);

      setTimeout(() => {
        newDiv.remove();
      }, 3000);
      resolve('ok');
    }

    return resolveHandler();
  });

  const fail = () => new Promise((resolve, reject) => {
    function rejectHandler() {
      const newDivError = document.createElement('div');

      newDivError.className = 'error-message';
      newDivError.innerText = 'Promise was rejected!';
      bd.appendChild(newDivError);
      reject(new Error('not ok'));
    }

    return rejectHandler();
  });

  success().then((v) => {
    setTimeout(() => {
      return fail();
    }, 3000);
  }).catch(() => {
    fail();
  }
  );
});
