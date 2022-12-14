// Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
        import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyAlcwXtUtPIRAG_K0EEFZ-DPi66_kYrjiA",
          authDomain: "formval-15b1c.firebaseapp.com",
          databaseURL: "https://formval-15b1c-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "formval-15b1c",
          storageBucket: "formval-15b1c.appspot.com",
          messagingSenderId: "370390739242",
          appId: "1:370390739242:web:5679233c9bc3def4d01653"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        // console.log(db);

        // import { getDatabase, ref, set } from "firebase/database";

        document.getElementById("userform").addEventListener("submit",function(e)
        {
            e.preventDefault();
            let userId = document.getElementById("uid").value;
            let name=document.getElementById("name").value;
            let email =document.getElementById("email").value;
            // let imageUrl ="www.google.lk";

            set(ref(db, 'users/' + userId), {
                username: name,
                email: email,
                // profile_picture : imageUrl
            });
        });
       
        // console.log(app);
        
