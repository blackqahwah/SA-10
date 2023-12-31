// import { getApps, initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//   apiKey: "AIzaSyDw5YUKhpdeR7bq4t5z-0zYJ-CXfCFdjSE",
//   authDomain: "speakarabic-e7a34.firebaseapp.com",
//   projectId: "speakarabic-e7a34",
//   storageBucket: "speakarabic-e7a34.appspot.com",
//   messagingSenderId: "793096124393",
//   appId: "1:793096124393:web:c41f3ee1eed0380656fd78",
//   measurementId: "G-SK4B1MDNTL"
// };

// let firebaseApp;
// if (!getApps().length) {
//   firebaseApp = initializeApp(firebaseConfig);
// } else {
//   firebaseApp = getApps()[0];
// }

// const auth = getAuth(firebaseApp);
// export { auth };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);


import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDw5YUKhpdeR7bq4t5z-0zYJ-CXfCFdjSE",
    authDomain: "speakarabic.web.app",
    projectId: "speakarabic-e7a34",
    storageBucket: "speakarabic-e7a34.appspot.com",
    messagingSenderId: "793096124393",
    appId: "1:793096124393:web:7fb8f756ecf650bf56fd78",
    measurementId: "G-EHY0ES4G3W"
};

let firebaseApp;
if (!getApps().length) {
 firebaseApp = initializeApp(firebaseConfig);
} else {
 firebaseApp = getApps()[0];
}

const auth = getAuth(firebaseApp);
export { auth };

const analytics = getAnalytics(firebaseApp);
