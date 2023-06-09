<template>
  <div class="sections">
    <section>
        <div class="container">
            <form @submit.prevent="signUp">
                <div class="form-group">
                    <label for="fullName">Full name:</label>
                    <input type="text" id="fullName" v-model="name">  
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email">
                </div>
  
                <div class="form-group">
                    <label for="massage">Password</label>
                    <textarea id="massage" rows="5" v-model="password"></textarea>
                </div>
  
                <button type="submit">SignUp</button>
            </form>
        </div>
    </section>

    <section>
        <div class="container">
            <form @submit.prevent="signIn">
                <div class="form-group">
                    <label for="fullName">Full name:</label>
                    <input type="text" id="fullName" v-model="name1">  
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email1">
                </div>
  
                <div class="form-group">
                    <label for="massage">Password</label>
                    <textarea id="massage" rows="5" v-model="password1"></textarea>
                </div>
  
                <button type="submit">Login</button>
            </form>
        </div>

    </section>
    
  </div>
  </template>
  
  <script>

import { setDoc } from '@firebase/firestore';
import { auth , db } from '../firebase/config';
import { createUserWithEmailAndPassword, } from 'firebase/auth'
import { collection } from '@firebase/firestore';

export default {
    name: "Simple-form",
    data() {
        return {
            user: null,
            name: '',
            email: '',
            password:'',
            name1: '',
            email1: '',
            password1:''

        };
    },
    methods: {
        // async signInWithGoogle() {
        //     // try {
        //     //     await signInWithRedirect(auth, provider);
        //     // }
        //     // catch (error) {
        //     //     console.error("Google Sign-in error:", error);
        //     // }
        // },

        async signIn() {
          // e.preventDefault()
          console.log(this.email, this.password);
          const result = await createUserWithEmailAndPassword(auth, this.email, this.password)
          this.saveUserDEtails(result)
        },
        
        async signUp(){
          // e.preventDefault()
          console.log(this.email1, this.password1);
          await createUserWithEmailAndPassword(auth, this.email1, this.password1)
          if (!this.validateEmailFormat(this.email)) {
        console.error('Invalid email format');
        return;
      }

        }


        ,
        saveUserDEtails(result) {
          setDoc(collection(db, 'user'), {...result})
        },

        // db.collection('formData').add(formData)
        // .then(() => {
        //   console.log('Form data sent to Firebase Firestore');
        //   // Do any additional actions or show success message
        // })
        // .catch((error) => {
        //   console.error('Error sending form data to Firebase Firestore:', error);
        //   // Handle error
        // });










    },
    mounted() {
        // onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //         this.user = user;
        //     }
        //     else {
        //         this.user = null;
        //     }
        // });
    },
};



  </script>
  
  <style scoped>

  * {
    box-sizing: border-box;
    font-family: "Montserrat";
  }
  .sections{
    display: flex;

  }
  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .container {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 20px #00000033;
    border-radius: 8px;
  }
  .form-group {
    margin-top: 20px;
    font-size: 20px;
    color: #9e9e9e;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 5px;
    font-size: 18px;
    border: 1px solid rgba(128, 128, 128, 0.199);
    margin-top: 5px;
  }
  textarea {
    resize: vertical;
  }
  button {
    width: 100%;
    border: none;
    padding: 20px;
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
  }
  </style>