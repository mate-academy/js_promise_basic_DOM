'use strict';

const documentClickResolver = (resolve) => {
  document.addEventListener('click', () => {
    resolve();
  });
};

const timerResolver = (resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 5000);
};

const documentClickPromise = new Promise(documentClickResolver);
const timerPromise = new Promise(timerResolver);

documentClickPromise.then(() => {
  // eslint-disable-next-line no-console
  console.log('First promise resolved');
});

timerPromise.catch(() => {
  // eslint-disable-next-line no-console
  console.log('Second promise rejected');
});
