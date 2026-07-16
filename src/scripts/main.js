'use strict';

const logo = document.querySelector('.logo');
// write your code here

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('just an error'));
  }, 3000);
});

const messegeS = () => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
};

const messegeN = () => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';

  document.body.append(div);
};

promise1.then(messegeS).catch(messegeN);
promise2.then(messegeS).catch(messegeN);
