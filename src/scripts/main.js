'use strict';

const successDiv = document.createElement('div');
const errorDiv = document.createElement('div');
const logo = document.querySelector('.logo');

successDiv.classList.add('message');
errorDiv.classList.add('message', 'error-message');

successDiv.textContent = 'Promise was resolved!';
errorDiv.textContent = 'Promise was rejected!';

function getSuccessData() {
  const promise1 = new Promise((resolve, reject) => {
    logo.addEventListener(
      'click',
      (ev) => {
        ev.preventDefault();
        resolve(successDiv);
      },
      { once: true },
    );
  });

  return promise1;
}

function getErrorData() {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(errorDiv);
    }, 3000);
  });

  return promise2;
}

async function successData() {
  try {
    const info = await getSuccessData();

    document.body.append(info);
  } catch (error) {
    document.body.append(errorDiv);
  }
}
successData();

async function errorData() {
  try {
    const info = await getErrorData();

    document.body.append(info);
  } catch (error) {
    document.body.append(error);
  }
}
errorData();
