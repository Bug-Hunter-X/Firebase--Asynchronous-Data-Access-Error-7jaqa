The solution involves properly handling the asynchronous nature of Firebase data retrieval.  Here's the corrected code using `.then()`:

```javascript
db.collection('myCollection').doc('myDoc').get().then(doc => {
  if (doc.exists) {
    const myField = doc.data().myField;
    if (myField) {
      console.log(myField); // Accessing myField safely
    } else {
      console.log('myField does not exist in the document');
    }
  } else {
    console.log('Document does not exist');
  }
});
```

Alternatively, you can use async/await:
```javascript
async function getData() {
  const docRef = db.collection('myCollection').doc('myDoc');
  const doc = await docRef.get();
  if (doc.exists) {
    const myField = doc.data().myField;
    console.log(myField);
  } else {
    console.log('Document does not exist');
  }
}
getData();
```
Both approaches ensure the data is available before attempting to access it, preventing the error.