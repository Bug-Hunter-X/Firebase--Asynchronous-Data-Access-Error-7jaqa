The Firebase SDK might throw an error if you try to access a property of a document snapshot before the data has fully loaded.  This often happens when you try to access data within an asynchronous callback before the `.get()` or `.onSnapshot()` promise has resolved. For example:
```javascript
db.collection('myCollection').doc('myDoc').get().then(doc => {
  console.log(doc.data().myField); // Error: myField might not exist yet
});
```