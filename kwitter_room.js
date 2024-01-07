
//ADD YOUR FIREBASE LINKS HERE


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
  
     

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);

      firebase.database().ref("/").child(room_name).update({
            purpose : "add room name"
      });

      

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
