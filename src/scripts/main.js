'use strict';

// write your code here
'use strict';

const logo = document.querySelector('.logo');

function addSuccessHandler() {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">Promise was resolved!</div>`,
  );
}

function addErrorHandler() {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message error-message">Promise was rejected!</div>`,
  );
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(addSuccessHandler);
promise2.catch(addErrorHandler);
