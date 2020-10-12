'use strict';

// write your code here

document.body.parentElement.children[2].addEventListener('click', (event) => {
  const item = event.target;

  if (item) {
    const promise1 = new Promise(function(resolve, reject) {
      resolve('Hi, Mate!');
    });
    const promise2 = new Promise(function(resolve, reject) {
      setTimeout(() => reject(new Error('Bye, Mate!')), 5000);
    });

    promise1
      .then(
        // eslint-disable-next-line no-console
        result => console.log(result),
      )
      .then(() => promise2);
  }
});
