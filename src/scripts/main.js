'use strict';

const logo = document.querySelector('.logo');

const message = document.createElement('DIV');

message.classList.add('message');

let promise1Resolve;
let promise2Reject;

new Promise((resolve, reject) => {
  promise1Resolve = resolve;
})
  .then(() => {
    message.classList.remove('error-message');
    message.innerText = 'Promise was resolved!';
    document.body.append(message);
  })
  .catch(() => undefined);

new Promise((resolve, reject) => {
  promise2Reject = reject;
}).then(
  () => undefined,
  () => {
    message.classList.add('error-message');
    message.innerText = 'Promise was rejected!';
    document.body.append(message);
  },
);

setTimeout(promise2Reject, 3000);

logo.addEventListener('click', () => {
  promise1Resolve();
});
