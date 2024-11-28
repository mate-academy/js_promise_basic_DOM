'use strict';

// write your code here
let promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    resolve();
  })
})

promise1.then(() => {
  const div = document.createElement('div');
  div.textContent = 'Promise was resolved!';
  div.classList = 'message';
  document.body.append(div);
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  },3000)
});

promise2.catch(() => {
  const div = document.createElement('div');
  div.textContent = 'Promise was rejected!';
  div.classList = 'message error-message';
  document.body.append(div);
})
