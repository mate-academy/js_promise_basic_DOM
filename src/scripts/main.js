'use strict';

const resolveMsg = 'Promise was resolved!';
const rejectMsg = 'Promise was rejected!';
const resolveMsgStyle = 'message';
const errorMsgStyle = 'error-message';
const notification = 'notification';
const logo = document.querySelector('.logo');
const resolver = (resolve) => {
  logo.addEventListener('click', () => {
    resolve(resolveMsg);
  });
};
const promiseResolve = new Promise(resolver);

promiseResolve.then(result => {
  showMsg(result);
});

const promiseReject = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error(rejectMsg)), 3000);
});

promiseReject.catch(error => {
  showMsg(error.message);
});

function showMsg(msg) {
  const promiseMsg = document.createElement('p');
  const msgStyle = msg === resolveMsg ? resolveMsgStyle : errorMsgStyle;

  promiseMsg.textContent = msg;
  promiseMsg.qa = notification;
  promiseMsg.classList.add(msgStyle);

  if (msg === rejectMsg) {
    promiseMsg.classList.add(errorMsgStyle);
  }
  document.body.append(promiseMsg);
};
