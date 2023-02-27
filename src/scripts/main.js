'use strict';

const promise1 = new Promise(resolve => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

function printMessage(className, result) {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="${className}">
      ${result}
    </div>
  `);
}

const succesHandler = () => {
  printMessage('message', 'Promise was resolved!');
};

const errorHandler = () => {
  printMessage('error-message message', 'Promise was rejected!');
};

promise1.then((succes) => {
  succesHandler(succes);
});

promise2.catch((error) => {
  errorHandler(error);
});
