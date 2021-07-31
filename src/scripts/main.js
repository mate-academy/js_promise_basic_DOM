'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const createElement = function(message, addClass) {
  const element = document.createElement('div');

  element.className = addClass;
  element.innerText = message;
  body.append(element);
};

new Promise(function(resolve) {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
}).then((message) => createElement(message, 'message'));

new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
}).catch((message) => createElement(message, 'error-message message'));
