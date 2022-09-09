'use strict';

const body = document.querySelector('body');

function getNewPromise() {
  const logo = document.querySelector('.logo');
  
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');

    });
    setTimeout(() => {
      reject('Promise was rejected!');
    }, 3000);
  }

  return new Promise(resolver);
}

const promise1 = getNewPromise();
promise1.then(text => {
  const message = document.createElement('div');
  message.className = 'message';
  message.innerHTML = text;
  body.append(message);
});

const promise2 = getNewPromise();
promise2.catch(text => {
  const message = document.createElement('div');
  message.className = 'error-message';
  message.innerHTML = text;
  body.append(message)
});
