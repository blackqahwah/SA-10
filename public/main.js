import { createApp } from 'vue';
import App from './App.vue'
import { auth } from "./firebase";

// import router from './router'

import {formToStorage} from './components/formstruct.vue' 

import './assets/main.css'
import 'bootstrap'
import './assets/bootstrap-icons/font/bootstrap-icons.css'
import './assets/bootstrap/dist/css/bootstrap.css'
import './assets/bootstrap/dist/js/bootstrap.js'
// import './assets/bootstrap/js/dist/collapse.js'


function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}


if (storageAvailable("localStorage")) {
     console.log("storage available");
} else {
 console.log("storage not available");
}




import('./router').then(({ default: router }) => {
  
  const app = createApp(App);
  

  app.use(router);

  app.mixin(formToStorage);

  app.mount('#app');
  
});



// let app;

// let app = createApp(App);

// auth.onAuthStateChanged((user) => {
//   if (!app) {

//     app = new Vue({
//       router,
//       store,
//       render: (h) => h(App),
//     }).$mount('#app')
//   }

//   app.mixin(formToStorage);


//   if (user) {
    
//     router.push('/')
//   }
// })



