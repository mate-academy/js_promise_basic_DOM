'use strict';

const body = document.querySelector('body');

// I made the task following the description, but added my solution!

// function createPromise() {
//   const resolver = (resolve, reject) => {
//     const logo = document.querySelector('.logo');
//
//     logo.addEventListener('click', () => {
//       resolve('Promise was resolved!');
//     });
//
//     setTimeout(() => {
//       reject('Promise was rejected!');
//     }, 3000);
//   };
//
//   return new Promise(resolver);
// }
//
// const promise = createPromise();
//
// promise
//   .then(message => {
//     const div = document.createElement('div');
//
//     div.className = 'message';
//     div.innerText = message;
//
//     body.append(div);
//   })
//   .catch(error => {
//     const div = document.createElement('div');
//
//     div.className = 'error-message';
//     div.innerText = error;
//
//     body.append(div);
//   });

function createPromise1() {
  const resolver = (resolve) => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  };

  return new Promise(resolver);
}

function createPromise2() {
  const resolver = (resolve, reject) => {
    setTimeout(() => {
      reject('Promise was rejected!');
    }, 3000);
  };

  return new Promise(resolver);
}

const promise1 = createPromise1();
const promise2 = createPromise2();

promise1
  .then(message => {
    const div = document.createElement('div');

    div.className = 'message';
    div.innerText = message;

    body.append(div);
  })
  .catch(error => {
    // eslint-disable-next-line
    console.warn(error);
  });

promise2
  .catch(error => {
    const div = document.createElement('div');

    div.className = 'error-message';
    div.innerText = error;

    body.append(div);
  });


