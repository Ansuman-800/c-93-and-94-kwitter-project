// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCGMAosr3AGCCkav4857GuOOczshL2ckdE",
    authDomain: "kwitter-43135.firebaseapp.com",
    databaseURL: "https://kwitter-43135-default-rtdb.firebaseio.com",
    projectId: "kwitter-43135",
    storageBucket: "kwitter-43135.appspot.com",
    messagingSenderId: "709488374380",
    appId: "1:709488374380:web:a07109aee8e76d9c42de49"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
{
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="letsChat_room.html";
}