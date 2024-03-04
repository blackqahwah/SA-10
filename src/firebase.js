import { getApps, initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAyAZVVf5YzegV3jR9uJFb28YlFUR6lBX0",
  authDomain: "speakarabic-courses.firebaseapp.com",
  projectId: "speakarabic-courses",
  storageBucket: "speakarabic-courses.appspot.com",
  messagingSenderId: "932943492484",
  appId: "1:932943492484:web:72a7f9f9c0762eb06759d1",
  measurementId: "G-WPRC3KTD1R"
};


let firebaseApp;
if (!getApps().length) {
 firebaseApp = initializeApp(firebaseConfig);
} else {
 firebaseApp = getApps()[0];
}

const auth = getAuth(firebaseApp);
export { auth };

const db = getFirestore(firebaseApp);
export {db, doc, getDoc};


const analytics = getAnalytics(firebaseApp);
