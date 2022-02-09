'use strict';

// write your code here
function createPromise1() {
  const executor1 = (resolve, reject) => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
      const div = document.createElement('div');

      try {
        resolve(div);
      } catch (error) {
        reject(div);
      }
    });
  };

  return new Promise(executor1);
}

function createPromise2() {
  const executor2 = (resolve, reject) => {
    const div = document.createElement('div');

    try {
      setTimeout(() => {
        resolve(div);
      }, 3000);
    } catch (error) {
      reject(div);
    }
  };

  return new Promise(executor2);
}

const promise1 = createPromise1();
const promise2 = createPromise2();

function addMessage(div) {
  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
}

function addErrorMessage(div) {
  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  document.body.append(div);
}

promise1
  .then(addMessage)
  .catch(addErrorMessage);

promise2
  .then(addMessage)
  .catch(addErrorMessage);
