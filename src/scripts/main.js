'use strict';

// write your code here

const promise1 = new Promise(function(resolve, reject) {
  document.addEventListener('click', () => {
    resolve('Hi, Mate!');
  }
  );
});

const promise2 = new Promise(function(resolve, reject) {
  document.addEventListener('click', () => {
    setTimeout(() => reject(new Error('Bye, Mate!')), 5000);
  }
  );
});

promise1
  .then(
    // eslint-disable-next-line no-console
    result => console.log(result),
  )
  .then(() => promise2);
