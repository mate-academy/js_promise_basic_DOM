"use strict";

// write your code here
const body = document.querySelector("body");
const logo = document.querySelector(".logo");

const promise1 = new Promise((res) => logo.addEventListener("click", res));
const promise2 = new Promise((res, rej) => setTimeout(rej, 3000));
const promises = [promise1, promise2];

function notification(className, text) {
  const message = document.createElement("div");
  message.innerText = text;
  message.className = className;
  body.append(message);
}

Promise.allSettled(promises).then((results) =>
  results.forEach((pr) => {
    if (pr.status === "fulfilled") {
      notification("message", "Promise was resolved!");
    } else {
      notification("message error-message", "Promise was rejected!");
    }
  })
);
