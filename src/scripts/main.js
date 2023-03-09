'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(function(resolve, reject) {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(function() {
  document.body.insertAdjacentHTML('beforeend',
    '<div class="message"> Promise was resolved! </div>'
  );
}).catch();

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(Error), 3000);
});

promise2.then().catch(function() {
  document.body.insertAdjacentHTML('beforeend',
    '<div class="error-message"> Promise was rejected! </div>'
  );
});
