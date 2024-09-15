'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function success() {
  const div = document.createElement('div');

  div.className = 'message';

  div.innerText = 'Promise was resolved!';
  body.append(div);
}

function error() {
  const divError = document.createElement('div');

  divError.className = 'error-message';

  divError.innerText = 'Promise was rejected!';
  body.append(divError);
};

const promise1 = new Promise(function(resolve, reject) {});

promise1.then(logo.addEventListener('click', () => {
  success();
}));

const promise2 = new Promise(function(resolve, reject) {});

promise2.finally(setTimeout(error, 3000));
