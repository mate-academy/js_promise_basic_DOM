'use strict';

const div = document.getElementById('div');
const logo = document.getElementById('logo');

function handler() {
  const promise1 = new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve('<div class="message">Promise was resolved!</div>');
    });
  });

  return promise1;
}

handler().then(result => {
  div.innerHTML = result;
});

function handler2() {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('<div class="message error-message">Promise was rejected!<div>');
    }, 2999);
  });

  return promise2;
}

handler2().catch(result => {
  div.innerHTML = result;
});
