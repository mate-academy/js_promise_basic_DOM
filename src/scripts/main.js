const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

function handleSuccess(message) {
  const successDiv = document.createElement('div');

  successDiv.className = 'message';
  successDiv.textContent = message;
  document.body.appendChild(successDiv);
}

function handleError() {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(errorDiv);
}

promise1.then(handleSuccess).catch(handleError);

promise2.then(handleSuccess).catch(handleError);
