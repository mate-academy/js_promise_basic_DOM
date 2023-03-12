'use strict';

// write your code here

const logo = document.querySelector('.logo');
const bd = document.querySelector('body');

const rejected = (resolve, reject) => {
  const newDivError = document.createElement('div');

  function rejectHandler() {
    setTimeout(() => {
      newDivError.className = 'error-message';
      newDivError.innerText = 'Promise was rejected!';
      bd.appendChild(newDivError);
      reject(new Error('not ok'));
    }, 3000);

    setTimeout(() => {
      newDivError.remove();
    }, 3000);
  }

  return rejectHandler();
};

const firstPromise = new Promise(rejected);

const resolver = (resolve, reject) => {
  logo.addEventListener('click', () => {
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
};

const secondPromise = new Promise(resolver);

firstPromise.then();
secondPromise.then();
