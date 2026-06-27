'use strict';

const logo = document.querySelector('.logo');

// -1/1-

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
});

// -1/2-       // short version

// const promise1 = new Promise((resolve) => {
//   logo.addEventListener('click', () => {
//     resolve();
//   });
// }).then(() => {
//   const div = document.createElement('div');

//   div.className = 'message';
//   div.textContent = 'Promise was resolved!';
//   document.body.append(div);
// });

// -2/1-

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.append(div);
});

// -2/2-      // short version

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject();
//   }, 3000);
// }).catch(() => {
//   const div = document.createElement('div');

//   div.className = 'message error-message';
//   div.textContent = 'Promise was rejected!';
//   document.body.append(div);
// });

// -2/3-        // INTERESTING RESULT

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('Promise was rejected!'));
//   }, 3000);
// });

// promise2.catch(() => {
//   const div = document.createElement('div');

//   // div.className = 'message error-message';
//   div.className = 'error-message';
//   div.textContent = 'Promise was rejected!';
//   document.body.append(div);
// });
