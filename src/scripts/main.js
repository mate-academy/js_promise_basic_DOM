function feedbackPromise() {
  const logo = document.querySelector('.logo');
  let checkPromise;

  const promise1 = new Promise((resolve, reject) => {
    checkPromise = resolve;
  });

  const promise2 = new Promise((resolve, reject) => {
    const duration = 3000;

    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Promise was rejected!');
    }, duration);
  });

  logo.addEventListener('click', (evt) => {
    checkPromise();
  });

  promise1
    .then(() => showMessage('Promise was resolved!'))
    .catch(() => showMessage('Promise was rejected!', 'error-message'));

  promise2
    .then(() => showMessage('Promise was resolved!'))
    .catch(() => showMessage('Promise was rejected!', 'error-message'));
}

const showMessage = (text, state = '') => {
  const message = document.createElement('div');

  message.className = `message ${state}`;
  message.textContent = text;

  document.body.append(message);
};

feedbackPromise();
