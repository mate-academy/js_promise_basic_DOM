'use strict';

function addMessage(message, type) {
  const div = document.createElement('div');

  div.classList.add(type);
  div.innerText = message;

  document.body.appendChild(div);
}

const logo = document.querySelector('.logo');
const waitForClick = new Promise(function(resolve, reject) {
  logo.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
});

waitForClick.then((resolution) => {
  addMessage(resolution, 'message');
}).catch(Error('error!'));

const waitForDelay = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error(`Promise was rejected!`)), 3000);
});

waitForDelay.then(() => {
  return 'Succes';
})
  .catch(rejection => {
    addMessage(rejection, 'message-error');
  });
