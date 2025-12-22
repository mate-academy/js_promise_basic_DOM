'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const promise2 = new Promise((resolve, reject) => {
    const div = document.createElement('div');
    div.classList.add('message');

    if (resolve) {
      resolve (
        div.append(resolve),
        document.querySelector('body').append(div)
      )
    } else {
      reject (div.classList.add('error-message'));
    }

  });
  const promise1 = new Promise((resolve, reject) => {
    const div = document.createElement('div');
    div.classList.add('message');

    setTimeout( () => {
      if (resolve) {
        resolve (
          div.append(resolve),
          document.querySelector('body').append(div)
        )
      } else {
        reject (div.classList.add('error-message'));
      }
    },
      3000);

  });

  return promise1, promise2;

});
