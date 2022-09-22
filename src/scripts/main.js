'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});
const resolveMessage = () => {
  logo.insertAdjacentHTML('afterend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
};
const rejectedMessage = () => {
  logo.insertAdjacentHTML('afterend', `
  <div class="error-message">
    Promise was rejected!
  </div>
`);
};

promise1.then(
  resolveMessage,
  rejectedMessage
);

promise2.then(
  resolveMessage,
  rejectedMessage
);
