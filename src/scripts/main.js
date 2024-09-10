'use strict';

document.addEventListener('click', (e) => {
  const logo = e.target.closest('.logo');

  if (!logo) {
    return;
  }

  const promise1 = new Promise(function (resolve, reject) {
    resolve('завершено');
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Ооооой!')), 3000);
  });

  promise1.then(() => {
    const message = document.createElement('div');
    const elementTitle = document.createElement('h2');

    elementTitle.innerHTML = 'Promise was resolved!';
    message.setAttribute('class', 'message');
    document.body.append(message);
    message.append(elementTitle);
  });

  promise2.catch(() => {
    const messageError = document.createElement('div');
    const elementTitleError = document.createElement('h2');

    elementTitleError.innerHTML = 'Promise was rejected!';
    messageError.setAttribute('class', 'message error-message');
    document.body.append(messageError);
    messageError.append(elementTitleError);
  });
});
