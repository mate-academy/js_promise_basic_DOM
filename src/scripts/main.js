const logo = document.querySelector('.logo');

function createMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';
  div.textContent = text;
  document.body.append(div);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener(
    'click',
    () => {
      resolve('Promise was resolved!');
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((msg) => createMessage(msg))
  .catch((err) => createMessage(err, true));

promise2
  .then((msg) => createMessage(msg))
  .catch((err) => createMessage(err, true));
