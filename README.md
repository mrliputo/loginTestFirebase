# Get idToken from Firebase Authentication

Demo app just to get idToken from Firebase Authentication with multiple providers.

1. You need to create `public/firebase.js` and input the necessary information.
2. `npm install`
3. `npm start`
4. Access to 'http://localhost:4000'
5. Press one of the Sign-In buttons
6. You can get idToken!

## `public/firebase.js`

```public/firebase.js
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
firebase.initializeApp(firebaseConfig);
```
