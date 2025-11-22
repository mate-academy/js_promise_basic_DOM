/* eslint-disable */
'use strict';

// write your code here

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', (event) => {
    resolve(event.target);
  });
});
promise1.then(() => {
  const body = document.querySelector('body');
  const el = document.createElement('div');
  body.append(el);
  el.classList.add('message');
  el.innerText = 'Promise was resolved!';
});
promise1.catch(() => {});

const promise2 = new Promise((resolve, reject) => {
  const time = reject;
  setTimeout(() => {
    time();
  }, 3000);
});

promise2.catch(() => {
  const message = document.querySelector('body');
  const newOne = document.createElement('div');
  message.append(newOne);
  newOne.classList.add('message', 'error-message');
  newOne.innerText = 'Promise was rejected!';
});
promise2.then(() => {});

//TODO Создай 2 промиса — promise1 и promise2.

//TODO promise1 должен выполняться (resolve) при клике по элементу с классом .logo.

// promise2 должен отклониться (reject) через 3 секунды.

// Добавь обработчики успеха и ошибки для обоих промисов:

// обработчик успеха должен добавлять в <body> элемент:

//TODO <div class="message">Promise was resolved!</div>

// обработчик ошибки должен добавлять в <body> элемент:

// <div class="message error-message">Promise was rejected!</div>
