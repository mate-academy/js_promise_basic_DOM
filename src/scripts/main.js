"use strict";

// write your code here
const body = document.querySelector("body");
const logo = document.querySelector(".logo");

const promise1 = new Promise((resolve) => logo.addEventListener("click", resolve));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 3000));
const promises = [promise1, promise2];

function printNotification(className, text) {
  const message = document.createElement("div");
  message.innerText = text;
  message.className = className;
  body.append(message);
}

Promise.allSettled(promises).then((results) =>
  results.forEach((pr) => {
    if (pr.status === "fulfilled") {
      printNotification("message", "Promise was resolved!");
    } else {
      printNotification("message error-message", "Promise was rejected!");
    }
  })
);
