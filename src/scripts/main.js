'use strict';

function handleSuccess() {
  const div = document.createElement("div");
  div.className = "message";
  div.textContent = "Promise was resolved!";
  document.body.appendChild(div);
}

function handleError() {
  const div = document.createElement("div");
  div.className = "message error-message";
  div.textContent = "Promise was rejected!";
  document.body.appendChild(div);
}

// promise1: resolves on click on .logo
const promise1 = new Promise((resolve) => {
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", () => {
      resolve();
    });
  }
});
