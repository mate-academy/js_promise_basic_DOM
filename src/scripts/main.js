const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const promise1 = Promise.resolve();

  promise1.then(() => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promise2.catch((error) => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = error.message;
    document.body.appendChild(div);
  });
});
