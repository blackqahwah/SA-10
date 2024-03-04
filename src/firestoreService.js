// import { getFirestore, doc, getDoc } from "./firebase";
import { auth,  db, doc } from "./firebase.js";
import './firebase';

// const db = getFirestore();


export function saveUserDetailsToFirestore(name, email) {
  
 auth.onAuthStateChanged(user => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      setDoc(userRef, {
        name: name,
        email: email,
        // other user info
      });
    }
 });
}