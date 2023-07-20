import { createApp } from 'vue'
import App from './App.vue'

// import theForm from './components/formstruct.vue' 

import {formToStorage} from './components/formstruct.vue' 

import './assets/main.css'
import 'bootstrap'
import './assets/bootstrap-icons/font/bootstrap-icons.css'
import './assets/bootstrap/dist/css/bootstrap.css'
import './assets/bootstrap/dist/js/bootstrap.js'


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

const app = createApp(App);

app.mixin(formToStorage);

app.mount('#app')


