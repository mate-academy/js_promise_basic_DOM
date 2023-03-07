'use strict';

// write your code here

const message1 = document.createElement('div');
const message2 = document.createElement('div');

message1.className = 'message';
message1.textContent = 'Promise was resolved!';
message2.className = 'error-message';
message2.textContent = 'Promise was rejected!';

const logo = document.querySelector('.logo');

const promise1 = new Promise(function(resolve) {
  logo.addEventListener('click', () => {
    resolve(document.body.append(message1));
  });
});

const promise2 = new Promise(function(resolve, reject) {
  resolve();

  setTimeout(() => {
    reject(document.body.append(message2));
  }, 3000);
});

promise1().then(() => {
  promise2();
});
