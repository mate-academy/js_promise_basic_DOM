"use strict";

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector(".logo");

  logo.addEventListener("click", () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error), 3000);
});

const messageHandler = (type = "success") => {
  return () =>
    document.body.insertAdjacentHTML(
      "beforeend",
      type === "success"
        ? `<div class="message">Promise was resolved</div>`
        : `<div class="error-message">Promise was rejected</div>`
    );
};

promise1.then(messageHandler()).catch(messageHandler("error"));
promise2.then(messageHandler()).catch(messageHandler("error"));
