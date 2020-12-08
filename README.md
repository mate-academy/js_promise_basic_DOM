1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://<your_account>.github.io/js_promise_basic_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: First promises

In this task you should create 2 promises.
1. The first promise should be resolved on a `click` on `.logo`.
2. The second promise should be rejected in 3 seconds.

That's all.

Implementation tips:
- print two messages to notify a user about resolved or rejected promise;
- the message is block element with class `message` for the resolved promise and `error-message` for the rejected promise; 
- the message about resolved promise should not disappear;
- the messages should have text `Promise was resolved!` and `Promise was rejected!`.
