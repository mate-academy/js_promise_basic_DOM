'use strict';

const div = document.getElementById('div');
const logo = document.getElementById('logo');

function handler() {
  const promise1 = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve('<div class="message">Promise was resolved!</div>')
    });
  };

  return new Promise(promise1);
}

handler().then(function(result) {
  div.innerHTML = result;
});

function handler2() {
  const promise2 = (resolve, reject) => {
    setTimeout(() => {
      reject('<div class="message error-message">Promise was rejected!<div>');
    }, 2999);
  };

  return new Promise(promise2);
}

handler2().catch(function(result) {
  div.innerHTML = result;
});
