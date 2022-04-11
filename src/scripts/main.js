'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

// const promise1 = new Promise((resolve, reject) => {
//   logo.addEventListener('click', () => {
//     resolve(body.insertAdjacentHTML('afterbegin', `
//     <div class="message">
//       Promise was resolved!
//     </div>`));
//   });
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(body.insertAdjacentHTML('afterbegin', `
//   <div class="error-message">
//     Promise was rejected!
//   </div>
//   `)), 3000);
// });

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then((result) => {
  body.insertAdjacentHTML('afterbegin', `
    <div class="message">
      ${result}
    </div>`);
});

promise2.catch((error) => {
  body.insertAdjacentHTML('afterbegin', `
    <div class="error-message">
      ${error}
   </div>
  `);
});
