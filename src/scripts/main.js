'use strict';

const MESSAGE_SELECTOR = '.message';
const ERROR_MESSAGE_SELECTOR = '.message.error-message';

const createElementMessage = (className, message) => {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = message;

  return div;
};

const removeIfExists = (selector) => {
  const prev = document.querySelector(selector);

  if (prev) {
    prev.remove();
  }
};

const addMessage = (selector, text) => {
  removeIfExists(selector);

  document.body.appendChild(
    createElementMessage(selector.split('.').filter(Boolean).join(' '), text),
  );
};

const logo = document.querySelector('.logo');

let logoResolve = null;
const promise1 = new Promise((resolve) => {
  logoResolve = resolve;
});

promise1
  .then((message) => addMessage(MESSAGE_SELECTOR, message))
  .catch((error) => addMessage(ERROR_MESSAGE_SELECTOR, error.message));

const handleLogoClick = () => {
  if (typeof logoResolve === 'function') {
    logoResolve('Promise was resolved!');
    logoResolve = null;

    if (logo) {
      logo.removeEventListener('click', handleLogoClick);
    }

    return;
  }
  // eslint-disable-next-line no-console
  console.error('resolveLogo is not function');
};

if (logo) {
  logo.addEventListener('click', handleLogoClick);
} else {
  // eslint-disable-next-line no-console
  console.error('logo is not found');
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise2
  .then((message) => addMessage(MESSAGE_SELECTOR, message))
  .catch((error) => {
    addMessage(ERROR_MESSAGE_SELECTOR, error.message);
  });
