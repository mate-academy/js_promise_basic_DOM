/* eslint-disable no-console */
'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  document.addEventListener('click', () => {
    resolve('Document clicked!');
  });
});

promise1
  .then((resolved) => {
    document.body.innerHTML += `
      <div
        style="
          width: 100px;
          height: 100px;
          transform: translate(-150px, -150px);
          background: green;
        "
      >
        ${resolved}
      </div>
    `;
    console.log(resolved);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Error!!!!');
  }, 5000);
});

promise2
  .then()
  .catch((error) => {
    document.body.innerHTML += `
      <div
        style="
          width: 100px;
          height: 100px;
          transform: translate(150px, -150px);
          background: yellow;
        "
      >
        ${error}
      </div>
    `;
    console.log(error);
  });
