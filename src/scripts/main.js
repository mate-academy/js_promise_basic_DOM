'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const createMessage = (className, textContent) => {
  document.body.insertAdjacentHTML('beforebegin', `
  <div class="${className}">
    ${textContent}
  </div>
  `);
};

promise1.then((textContent) => {
  createMessage('message', textContent);
});

promise2.catch(textContent => {
  createMessage('message error-message', textContent);
});
