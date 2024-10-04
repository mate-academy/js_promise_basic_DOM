'use strict';

const successHandler = (message) => {
  setTextAndAppend(
    createMessageElement('div', 'message'),
    document.body,
    message,
  );
};

const errorHandler = (message) => {
  setTextAndAppend(
    createMessageElement('div', 'message', 'error-message'),
    document.body,
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

const promise1 = new Promise((resolve) => {
  document
    .querySelector('.logo')
    .addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

[promise1, promise2].forEach((promise) => {
  promise.then(successHandler).catch(errorHandler);
});
