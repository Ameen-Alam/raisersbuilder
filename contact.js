  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBxqXbxHmwn-KZ7dgihThQbGV0NGsWx3JA",
    authDomain: "raisersbuilder-e9f2f.firebaseapp.com",
    databaseURL: "https://raisersbuilder-e9f2f.firebaseio.com",
    projectId: "raisersbuilder-e9f2f",
    storageBucket: "raisersbuilder-e9f2f.appspot.com",
    messagingSenderId: "459225500157"
  };
  firebase.initializeApp(config);



// refrence manage collection
var list = document.getElementById("list")
var messageRef = firebase.database().ref('messages');

//   listen message collection
document.getElementById("contactForm").addEventListener('submit', submitForm);
// submit form
function submitForm(e){
    e.preventDefault();
    
    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var email = getInputVal('email');
    var source = getInputVal('source');
    var message = getInputVal('message');
    var date = new Date().toLocaleString()
    console.log(date);
    // save message
    saveMessage(name, phone, email, source, message , date) 
    // show alert
    document.querySelector('.alert').style.display = 'block';
    // hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000)
    // clear form
    document.getElementById("contactForm").reset();
}
    // console.log(name + email + phone + source + message);
// Function to get get form value
function getInputVal(id){
    return document.getElementById(id).value;
}

// save messages to firebase

function saveMessage(name, phone, email, source, message , date){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        phone: phone,
        email: email,
        source: source,
        message: message ,
        date : date
    });
}