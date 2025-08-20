'use strict';
/* eslint no-console: ["error", { allow: ["warn", "log"] }] */

const logoElement = document.querySelector('.logo');

const resolvedPromise = () => {
  console.log(logoElement);
};

logoElement.addEventListener('click', resolvedPromise);
