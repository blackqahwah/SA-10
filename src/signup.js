const admin = require('firebase-admin');

// Initialize Firebase Admin SDK if not already done
if (!admin.apps.length) {
 admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://your-project-id.firebaseio.com'
 });
}

const db = admin.firestore();

async function signup(email, password) {
 // Check if the email already exists
 const snapshot = await db.collection('users').where('email', '==', email).get();

 if (!snapshot.empty) {
    throw new Error('Email already in use.');
 }

 // Proceed with the signup
 const userRecord = await admin.auth().createUser({
    email: email,
    password: password,
    // Additional user information
 });

 // Optionally, store additional user information in Firestore
 await db.collection('users').doc(userRecord.uid).set({
    email: email,
    // Other user information
 });

 return userRecord.uid;
}

module.exports = { signup };
