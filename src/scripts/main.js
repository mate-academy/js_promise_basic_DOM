'use strict';

// write your code here
const SUCCESS = {
  cssClass: 'message',
  text: 'Promise was resolved!',
};
const ERROR = {
  cssClass: 'message error-message',
  text: 'Promise was rejected!',
};

function appendElement({ cssClass, text }) {
  const element = document.createElement('DIV');

  element.className = cssClass;
  element.innerHTML = text;
  document.body.append(element);
};

const promise1 = () => {
  const logoElement = document.querySelector('.logo');

  return new Promise(resolve => {
    logoElement.addEventListener('click', () => {
      resolve(SUCCESS);
    });
  });
};
const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(ERROR);
    }, 3000);
  });
};

promise1().then(appendElement).catch(appendElement);
promise2().then(appendElement).catch(appendElement);
