'use strict';
// debugger;

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.innerHTML = `
  <div class="message">
    Promise was resolved!
  </div>`;

errorMessage.innerHTML = `
  <div class="error-message">
    Promise was rejected!
  </div>`;

const p1 = new Promise((resolve) => {
  resolve();
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(), 2990);
});

logo.onclick = () => {
  p1
    .then(() => {
      body.insertAdjacentElement('afterbegin', message);
    });
};

p2.then(() => {
  body.insertAdjacentElement('afterbegin', errorMessage);

  logo.onclick = () => {};
}
);

//  I can`t understand this task ¯\_(ツ)_/¯
