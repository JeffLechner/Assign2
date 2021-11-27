import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBzv0kOX_Z4GcJ4KyOKJEQxpWd6mW1-8xQ',
  authDomain: 'my-subscriptions-dd697.firebaseapp.com',
   projectId: 'my-subscriptions-dd697',
  storageBucket: 'my-subscriptions-dd697.appspot.com',
  messagingSenderId: '111927928152',
  appId: '1:111927928152:web:4f01557847255bd895312d'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()


