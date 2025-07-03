const promiseFirst = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promiseSecond = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected after timeout'));
  }, 3000);
});

function handleSuccess() {
  const successDiv = document.createElement('div');

  successDiv.className = 'message';
  successDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(successDiv);
}

function handleError() {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(errorDiv);
}

promiseFirst.then(handleSuccess).catch(handleError);
promiseSecond.then(handleSuccess).catch(handleError);
