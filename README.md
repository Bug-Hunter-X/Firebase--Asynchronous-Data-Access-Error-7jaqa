# Firebase Asynchronous Data Access Error
This repository demonstrates a common error when working with Firebase data: attempting to access properties of a document snapshot before the data has fully loaded.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected approach.

The issue arises from the asynchronous nature of Firebase's data retrieval methods. The promise returned by `.get()` or `.onSnapshot()` needs to resolve before you can safely access the data.  Failure to do so results in an error or undefined values.

**Solution:** Ensure data is available before accessing it using `.then()` or async/await.