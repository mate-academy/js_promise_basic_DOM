'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

// promise1
//   .then(() => {
//     const resolveMessage = document.createElement('div');

//     resolveMessage.classList.add('message')
//     resolveMessage.textContent = 'Promise was resolved!';

//     document.body.appendChild(resolveMessage);
//   })
//   .catch(() => {
//     const errorMessage = document.createElement('div');

//     errorMessage.classList.add('message', 'error-message')
//     errorMessage.textContent = 'Promise was rejected!';

//     document.body.appendChild(errorMessage);
//   })

const handleResolve = () => {
  const resolveMessage = document.createElement('div');

  resolveMessage.classList.add('message');
  resolveMessage.textContent = 'Promise was resolved!';

  document.body.appendChild(resolveMessage);
};

const handleReject = () => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message', 'error-message');
  errorMessage.textContent = 'Promise was rejected!';

  document.body.appendChild(errorMessage);
};

promise1.then(handleResolve).catch(handleReject);
promise2.then(handleResolve).catch(handleReject);
