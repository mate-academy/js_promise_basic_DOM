'use strict';

const documentClickResolver = (resolve) => {
  document.addEventListener('click', () => {
    resolve('First promise resolved');
  });
};

const timerResolver = (resolve, reject) => {
  setTimeout(() => {
    reject('Second promise rejected');
  }, 5000);
};

const documentClickPromise = new Promise(documentClickResolver);
const timerPromise = new Promise(timerResolver);

documentClickPromise.then((result) => {
  // eslint-disable-next-line no-console
  console.log(result);
});

timerPromise.catch((error) => {
  // eslint-disable-next-line no-console
  console.log(error);
});
