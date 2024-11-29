const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line
    reject('Promise was rejected!');
  }, 3000);
});

const successHandler = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
};

const errorHandler = (message) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = message;
  document.body.appendChild(div);
};

promise1.then(successHandler).catch(errorHandler);

promise2.then(successHandler).catch(errorHandler);
