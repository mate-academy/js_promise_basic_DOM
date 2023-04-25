'use strict';

// write your code here
function displayMessage(text, addClass = 'message') {
  const message = document.createElement('div');

  message.innerHTML = text;
  message.classList.add('message', addClass);

  document.body.append(message);
}

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  new Promise(resolve => {
    resolve('Promise was resolved!');
  })
    .then(result => displayMessage(result));
});

new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Promise was rejected!');
})
  .catch(reject => displayMessage(reject, 'error-message'));
