'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const createDomNode = (type) => document.createElement(type);

const addClassesToDomNode = (node, classes) => node.classList.add(...classes);

const addTextToDomNode = (node, text) => (node.textContent = text);

const appendNode = (parentNode, node) => parentNode.append(node);

const createNotification = (type, parentNode, classes, text) => {
  const node = createDomNode(type);

  addClassesToDomNode(node, classes);

  addTextToDomNode(node, text);

  appendNode(parentNode, node);
};

const promise1 = new Promise((resolve) => resolve('Promise was resolved!'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

logo.addEventListener('click', () => {
  promise1
    .then((res) => {
      createNotification('div', body, ['message'], res);
    })
    .catch((_error) => {
      createNotification(
        'div',
        body,
        ['message', 'error-message'],
        _error.message,
      );
    });
});

promise2.catch((_error) => {
  createNotification('div', body, ['message', 'error-message'], _error.message);
});
