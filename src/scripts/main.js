"use strict";

const logo = document.querySelector(".logo");

function firstPromiseResolver(resolve) {
  logo.addEventListener("click", () => {
    resolve();
  });
};

function secondPromiseResolver(_, reject) {
  setTimeout(() => {
    reject();
  }, 3000);
};

function promiseSuccess() {
  const message = document.createElement("div");
  message.classList.add("message");
  message.innerText = "Promise was resolved!";
  document.body.append(message);
};

function promiseError() {
  const message = document.createElement("div");
  message.classList.add("error-message");
  message.innerText = "Promise was rejected!";
  document.body.append(message);
};

const promise1 = new Promise(firstPromiseResolver);
const promise2 = new Promise(secondPromiseResolver);

promise1
  .then(promiseSuccess)
  .catch(promiseError);

promise2
  .then(promiseSuccess)
  .catch(promiseError);
