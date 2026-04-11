// Handlery
// Success handler
function handleSuccess() {
  const div = document.createElement("div");
  div.className = "message";
  div.textContent = "Promise was resolved!";
  document.body.appendChild(div);
}

// Error handler
function handleError() {
  const div = document.createElement("div");
  div.className = "message error-message";
  div.textContent = "Promise was rejected!";
  document.body.appendChild(div);
}

// promise1 – resolve on click
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector(".logo");

  if (!logo) {
    reject(new Error("Logo not found"));
    return;
  }

  logo.addEventListener("click", () => {
    resolve();
  });
});

// promise2 – reject after 3 seconds
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise was rejected"));
  }, 3000);
});

// 🔥 handlers podpięte do obu promise'ów
promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
