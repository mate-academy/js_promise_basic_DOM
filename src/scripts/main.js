'use strict';

// write your code here

const p1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    const container = document.createElement('div');

    container.className = 'message';
    container.innerHTML = `Promise was resolved!`;
    document.querySelector('body').append(container);
    resolve();
  });
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const container = document.createElement('div');

    container.className = 'error-message';
    container.innerHTML = `Promise was rejected!`;
    document.querySelector('body').append(container);
  }, 3000);

  reject();
});

p1.then();
p2.then().catch();
