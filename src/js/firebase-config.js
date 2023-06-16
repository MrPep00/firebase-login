import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDHmHedTBn-Tm32_tmUjzNANfn_9XgsU-k",
  authDomain: "filmoteka-code-ronins.firebaseapp.com",
  projectId: "filmoteka-code-ronins",
  storageBucket: "filmoteka-code-ronins.appspot.com",
  messagingSenderId: "137233530754",
  appId: "1:137233530754:web:7c1030485f1c94e471999b",
};

const app = initializeApp(firebaseConfig);

export { app };
