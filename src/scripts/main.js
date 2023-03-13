'use strict';

const logo = document.querySelector('.logo');
const bd = document.querySelector('body');

const rejected = (resolve, reject) => {
  reject(new Error('not ok'))
};

const firstPromise = new Promise(rejected);

const resolver = (resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('ok')
  });
};

const secondPromise = new Promise(resolver);

firstPromise.catch(() => {

    const newDivError = document.createElement('div');

    setTimeout(() => {
      newDivError.className = 'error-message';
      newDivError.innerText = 'Promise was rejected!';
      bd.appendChild(newDivError);

    }, 3000);

    setTimeout(() => {
      newDivError.remove();
    }, 6000);
  })

secondPromise.then((result) => {

  const newDiv = document.createElement('div');
    newDiv.className = 'message';
    newDiv.innerText = 'Promise was resolved!';
    bd.appendChild(newDiv);

    setTimeout(() => {
    newDiv.remove();
  }, 3000);
});
