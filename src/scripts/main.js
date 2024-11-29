const logo = document.querySelector('.logo');

function createResolvedPromise(message) {
  return new Promise((resolve, reject) => {
    resolve(message);
  });
}

function createRejectedPromise(message, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(message);
    }, timeout);
  });
}

function handleSuccess(data) {
  const successDiv = document.createElement('div');

  successDiv.classList.add('message');
  successDiv.textContent = data;
  document.body.appendChild(successDiv);
}

function handleError(data) {
  const errorDiv = document.createElement('div');

  errorDiv.classList.add('message', 'error-message');
  errorDiv.textContent = data;
  document.body.appendChild(errorDiv);
}

logo.addEventListener('click', () => {
  const promise1 = createResolvedPromise('Promise was resolved!');

  promise1.then(handleSuccess).catch(handleError);
});

const promise2 = createRejectedPromise('Promise was rejected!', 3000);

promise2.then(handleSuccess).catch(handleError);
