'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.classList = 'message';
message.innerText = 'Promise was resolved!';

errorMessage.classList = 'message error-message';
errorMessage.innerText = 'Promise was rejected!';

function createPromise() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => {
      reject();
    }, 3000);
  };

  return new Promise(resolver);
}

const promice1 = createPromise();
const promice2 = createPromise();

promice1.then(() => {
  body.append(message);
});

promice2.catch(() => {
  body.append(errorMessage);
});
