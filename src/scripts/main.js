'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    const container = document.createElement('div');

    container.textContent = 'Promise was resolved!';
    container.classList.add('message');

    document.body.append(container);

    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const containerError = document.createElement('div');

    containerError.textContent = 'Promise was rejected!';
    containerError.classList.add('error-message');

    reject(document.body.append(containerError));
  }, 3000);
});

// promise1
//   .then((resolve) => {
//     const container = document.createElement('div');

//     container.textContent = 'Promise was resolved!';
//     container.classList.add('message');

//     logo.addEventListener('click', () => {
//       resolve(document.body.append(container));
//     });
//   });

// promise2
//   .catch((reject) => {
//     const containerError = document.createElement('div');

//     containerError.textContent = 'Promise was rejected!';
//     containerError.classList.add('error-message');

//     setTimeout(() => {
//       reject(containerError.append());
//     }, 3000);
//   });
