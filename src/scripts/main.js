const promise1 = new Promise((resolve, reject) => {
  const logoElement = document.querySelector('.logo');

  logoElement.addEventListener('click', () => {
    resolve('Promise 1 resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 2 rejected!'));
  }, 3000);
});

const successHandler = () => {
  const successDiv = document.createElement('div');

  successDiv.className = 'message';
  successDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(successDiv);
};

const errorHandler = (error) => {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.textContent = error.message;
  document.body.appendChild(errorDiv);
};

promise1.then(successHandler).catch(errorHandler);

promise2.then(successHandler).catch(errorHandler);
