import { createRouter, createWebHistory } from 'vue-router'

import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

import { auth } from '../firebase'

import Profile from '../components/profile.vue' 

import Confirm from '../components/confirm.vue' 

import Welcome from '../components/welcome.vue'

import Getlink from '../components/getlink.vue'

import Home from '../components/home.vue'


const routes = [
  
      {
        path: '/welcome',
        name: 'welcome',
        component: Welcome,
        meta: {
          requiresAuth: true,
        },
     
    },


     {
        path: '/confirm',
        name: 'confirm',
        component: Confirm,
        // meta: {
        //   requiresAuth: true,
        // },
     
    },
  
    {
        path: '/profile',
        name: 'profile',
        component: Profile
      },

   {
        path: '/getlink',
        name: 'getlink',
        component: Getlink
      },
{
        path: '/',
        name: 'home',
        component: Home
      }
  
  ]


const router = createRouter({
      history: createWebHistory(),
      routes,
    })




router.beforeEach((to, from, next) => {

  if(to.meta.requiresAuth){
    const token = localStorage.getItem('token');
    if(token){
      next();
    } else{
      next('/confirm');
    }
  } else{
    next();
    }
});


// router.beforeEach((to, from, next) => {



//   const auth = getAuth();

//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   const isAuthenticated = isSignInWithEmailLink(auth, window.location.href) 

//   let email = window.localStorage.getItem('emailForSignIn');


//   signInWithEmailLink(auth, email, window.location.href)
//     .then((result) => {

//       window.localStorage.removeItem('emailForSignIn');

//     })
//     .catch((error) => {

//     });


//   if (requiresAuth && !isAuthenticated) {
//     next('/')
//   } else if (!requiresAuth && isAuthenticated) {
//     next('welcome')
//   } else {
//     next()
//   }



// })





export default  router


