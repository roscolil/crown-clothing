import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyAX1LdbAUVDAd-gtoo8rE3GckONHv-Rqw8",
  authDomain: "crwn-db-d7b2a.firebaseapp.com",
  projectId: "crwn-db-d7b2a",
  storageBucket: "crwn-db-d7b2a.appspot.com",
  messagingSenderId: "271323623502",
  appId: "1:271323623502:web:abc5ca447806f0076e931f"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase