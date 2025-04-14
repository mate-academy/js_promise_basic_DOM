const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  const onMouseDown = (e) => {
    if (e.button === 0) {
      resolve();
      logo.removeEventListener('mousedown', onMouseDown);
    }
  };

  logo.addEventListener('mousedown', onMouseDown);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Rejected after 3 seconds'));
  }, 3000);
});

const handleSuccess = () => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
};

const handleError = () => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
