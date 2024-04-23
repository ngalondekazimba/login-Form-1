
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDMTxTjHThbDeZ18byobC714CdTgIIu3nI",
    authDomain: "login-a9f71.firebaseapp.com",
    projectId: "login-a9f71",
    storageBucket: "login-a9f71.appspot.com",
    messagingSenderId: "1045343392497",
    appId: "1:1045343392497:web:026a7685e99a1c9c094f50"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //get ref to database services
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click',function(r){

    set(ref(db, 'user/' + document.getElementById("username").value),
    {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        PhoneNumber: document.getElementById("phone").value,
    });
             alert("login Successful !")
  })
