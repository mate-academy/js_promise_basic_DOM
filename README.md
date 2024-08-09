# First promises
Create 2 promises `promise1` and `promise2`.
- `promise1` should be resolved on a `click` on `.logo`.
- `promise2` promise should be rejected in 3 seconds.
- add success and error handlers for both promises
- success handler should append a `<div class="message">` with the text `Promise was resolved!` to the body
- error handler should append a `<div class="message error-message">` with the text `Promise was rejected!` to the body

## Instructions
1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://YuliiaKosenchuk.github.io/js_promise_basic_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.


Завдання полягає у створенні двох об'єктів `Promise` — `promise1` та `promise2`.

1. `promise1` повинен виконуватися (resolve) при кліку на елемент з класом `.logo`.
2. `promise2` повинен бути відхилений (reject) через 3 секунди після його створення.
3. Для обох обіцянок потрібно додати обробники успішного (success) та помилкового (error) виконання:
   - Успішний обробник повинен додавати в кінець сторінки (в тіло документа) `<div class="message">` з текстом `Promise was resolved!`.
   - Помилковий обробник повинен додавати в кінець сторінки `<div class="message error-message">` з текстом `Promise was rejected!`.
