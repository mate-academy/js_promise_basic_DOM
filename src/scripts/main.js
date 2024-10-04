'use strict';

const body = document.querySelector('body');

const successHandler = (message) => {
  setTextAndAppend(createMessageElement('div', 'message'), body, message);
};

const errorHandler = (message) => {
  setTextAndAppend(
    createMessageElement('div', 'message', 'error-message'),
    body,
    message,
  );
};

const createMessageElement = (tagName, ...classNames) => {
  const element = document.createElement(tagName);

  classNames.forEach((item) => element.classList.add(item));

  return element;
};

const setTextAndAppend = (element, outerElement, message) => {
  element.textContent = message;
  outerElement.append(element);
};

// eslint-disable-next-line no-unused-vars
const promise1 = new Promise((resolve) => {
  document
    .querySelector('.logo')
    .addEventListener('click', () => resolve('Promise was resolved!'));
})
  .then(successHandler)
  .catch(errorHandler);

// eslint-disable-next-line no-unused-vars
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
})
  .then(successHandler)
  .catch(errorHandler);
