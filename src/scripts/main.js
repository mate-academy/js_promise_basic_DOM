'use strict';

const logo = document.querySelector('.logo');

// створюємо проміс на клік
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!')); // Передаємо об'єкт помилки
  }, 3000);
});

function messageConstructor(text, isError = false) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (isError) {
    message.classList.add('error-message');
  }

  message.textContent = text;
  document.body.append(message);
}

promise1.then(() => {
  messageConstructor(`Promise was resolved!`);
});

promise2.catch((error) => {
  messageConstructor(error.message, true); // Відображаємо текст помилки
});
