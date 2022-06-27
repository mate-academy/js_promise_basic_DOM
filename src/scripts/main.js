'use strict';

// write your code here

document.querySelector('.logo')
  .addEventListener('click', () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(Error);

        document.getElementsByTagName('body')[0]
          .insertAdjacentHTML('beforeend', `
            <div class="error-message">Promise was rejected!</div>
        `);
      }, 3000);
      resolve();

      document.getElementsByTagName('body')[0]
        .insertAdjacentHTML('beforeend', `
          <div class="message">Promise was resolved!</div>
        `);
    });
  });
