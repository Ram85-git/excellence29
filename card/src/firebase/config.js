import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider} from "firebase/auth";
// import { Storage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCNEk8vxwgxrO2Yg1fhAGFzfD0aM5j67Fs",
  authDomain: "simple-contact-form-a482f.firebaseapp.com",
  projectId: "simple-contact-form-a482f",
  storageBucket: "simple-contact-form-a482f.appspot.com",
  messagingSenderId: "934435760510",
  appId: "1:934435760510:web:bfcb877ebc01408bb2eb2f"
};

const app = initializeApp(firebaseConfig);
  const Firestore = getFirestore(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);
// const getStorage =Storage(app);
  export { Firestore, collection, addDoc,db, getDocs, deleteDoc, doc, updateDoc, auth, createUserWithEmailAndPassword ,provider };
    





