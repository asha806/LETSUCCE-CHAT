var firebaseConfig = {
      apiKey: "AIzaSyAkMQniVsQ4UQ3pj3SjBw3EfLCKBKpCXF0",
      authDomain: "kwitter-e41e3.firebaseapp.com",
      databaseURL: "https://kwitter-e41e3-default-rtdb.firebaseio.com",
      projectId: "kwitter-e41e3",
      storageBucket: "kwitter-e41e3.appspot.com",
      messagingSenderId: "622361686185",
      appId: "1:622361686185:web:6eaec11ca969603c9739b8"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
