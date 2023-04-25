'use strict';

const logo = document.querySelector('.logo');
const promises1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('<div class="message">Promise was resolved!</div>');
  });
});
const promises2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promises1.then(div => document.body.insertAdjacentHTML('beforeend', div));

promises2.catch(() => document.body.insertAdjacentHTML('beforeend',
  `<div class="error-message message">Promise was rejected!</div>`));
