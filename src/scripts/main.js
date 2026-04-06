'use strict';

const createMessage = (message, className) => {
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

let resolveLogo = null;

new Promise((resolve) => {
  resolveLogo = resolve;
}).then((message) => {
  removeIfExists('.message');
  document.body.appendChild(createMessage(message, 'message'));
});

const logo = document.querySelector('.logo');
const handleResolve = () => {
  if (typeof resolveLogo === 'function') {
    resolveLogo('Promise was resolved!');
    resolveLogo = null;

    if (logo) {
      logo.removeEventListener('click', handleResolve);
    }

    return;
  }
  // eslint-disable-next-line no-console
  console.error('resolveLogo is not function');
};

if (logo) {
  logo.addEventListener('click', handleResolve);
} else {
  // eslint-disable-next-line no-console
  console.error('logo is not found');
}

new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
}).catch((error) => {
  removeIfExists('.message.error-message');

  document.body.appendChild(
    createMessage(error.message, 'message error-message'),
  );
});
