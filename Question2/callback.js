function resolvedPromise() {
  function anotherResolvedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((setTimeout = 500)) {
          resolve("{ message : delayed success! }");
        } else reject("Failure");
      }, 500);
    });
  }
  anotherResolvedPromise().then((value) => console.log(value));
}

function rejectedPromise() {
  function anotherRejectedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (setTimeout != 500) {
          resolve("{ message : delayed success! }");
        } else reject("{ error : delayed exception! }");
      }, 500);
    });
  }
  anotherRejectedPromise().catch((value) => console.log(value));
}

resolvedPromise();
rejectedPromise();
