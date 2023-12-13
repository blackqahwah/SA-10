import { createRouter, createWebHistory } from 'vue-router'

import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

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
 if (to.path === '/welcome') {
   const auth = getAuth();
   if (isSignInWithEmailLink(auth, window.location.href)) {

     let email = window.localStorage.getItem('useremail');

     if(!email) {
       window.prompt('please provide your email for confirmation');
     }
     
     signInWithEmailLink(auth,email, window.location.href)
       .then((result) => {
         // User is signed in.
         console.log('signed in')
         next();
       })
       .catch((error) => {
         // No user is signed in.
         next('/confirm');
       });
   } else {
     // No user is signed in.
     next('/confirm');
   }
 } else {
   next();
 }
});


export default  router


