'use strict';

document.addEventListener('click', () => {
const promiseResolve = Promise.resolve('Successful');

promiseResolve
.then(result => {
  console.log('Successful', result)
})

setTimeout(() => {
  const promiseReject = Promise.reject('404');
  promiseReject
  .catch(error => {
    console.warn('Error', error)
  })
  }, 5000)
})