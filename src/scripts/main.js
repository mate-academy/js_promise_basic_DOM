'use strict';

const logo = document.querySelector('.logo');
const resolverClick = (resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
};
const resolverTimer = (resolve, reject) => {
  setTimeout(reject, 3000);
};

const promiseOnClick = new Promise(resolverClick);
const promiseByTimer = new Promise(resolverTimer);

promiseOnClick.then(result => {
  const mes = document.createElement('span');

  mes.innerHTML = '<span> Promise was resolved! </span>';
  mes.classList.add('message');
  document.body.append(mes);
});

promiseByTimer.catch(result => {
  const mes = document.createElement('span');

  mes.innerHTML = '<span> Promise was rejected! </span>';
  mes.classList.add('message');
  mes.classList.add('error-message');
  document.body.append(mes);
});
