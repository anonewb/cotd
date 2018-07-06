import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCCMGFo9nsdkYLTT9PoJTh0jFfE6pAg06o",
    authDomain: "catch-of-the-day-hp-react.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-hp-react.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;