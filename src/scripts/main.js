function createDiv(message, className) {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = message;
  document.body.appendChild(div);
}

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const handleSuccess = (message) => {
  createDiv(message, 'message');
};

const handleError = (message) => {
  createDiv(message, 'message error-message');
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
