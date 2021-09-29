'use strict';

const logo = document.querySelector('.logo');

function createElement(textMessage, classMessage) {
  const message = document.createElement('div');

  message.innerText = textMessage;
  message.classList.add(classMessage);
  document.body.append(message);
}

function createSuccessMessage() {
  const resolver = (resolved) => {
    logo.addEventListener('click', () => {
      resolved('Promise was resolved!');
    });
  };

  return new Promise(resolver);
}

function createErrorMessage() {
  const resolver = (resolved, rejected) => {
    setTimeout(() => {
      rejected('Promise was rejected!');
    }, 3000);
  };

  return new Promise(resolver);
}

createSuccessMessage()
  .then((result) => {
    createElement(result, 'message');
  });

createErrorMessage()
  .catch((error) => {
    createElement(error, 'error-message');
  });
