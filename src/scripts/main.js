const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const successHandler = (message = 'Promise was resolved!') => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
};

const errorHandler = (error) => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message', 'error-message');
  messageDiv.textContent = error.message;
  document.body.appendChild(messageDiv);
};

promise1.then(successHandler);
promise2.then(successHandler).catch(errorHandler);
