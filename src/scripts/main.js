const promise1 = new Promise((resolve, reject) => {
  document
    .querySelector('.logo')
    .addEventListener('click', () => resolve(`Promise was resolved!`));
});

promise1.then((payload) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = payload;
  document.body.append(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(`Promise was rejected!`)), 3000);
});

promise2.then(
  () => {},
  (error) => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = error.message;
    document.body.append(div);
  },
);
