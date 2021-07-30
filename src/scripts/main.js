'use strict';

const logo = document.querySelector('.logo');
const div = document.createElement('div');

new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
}).then(() => addElem('message', 'Promise was resolved!'));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
}).catch(() => addElem('error-message', 'Promise was rejected!'));

function addElem(aClass, text) {
  div.className = `${aClass}`;
  div.textContent = `${text}`;
  document.body.append(div);
};
