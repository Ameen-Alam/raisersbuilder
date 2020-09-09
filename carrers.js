// ADMIN LOGIN 
  // Initialize Firebase
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

    
    
let database = firebase.database().ref('/');
let auth = firebase.auth();
let sign_in = document.getElementById("sign_in");
let inEmail = document.getElementById("email");
let inPpassword = document.getElementById("password");
let signIn = document.getElementById("signIn");




signIn.onclick = function submit(event) {
    event.preventDefault();
    let user = {
        email: inEmail.value,
        password: inPpassword.value
    };
    auth.signInWithEmailAndPassword(user.email, user.password)
        .then(function(success) {
            database.child('user/' + success.uid).once('value', function(snapshot) {
                console.log(snapshot.val());
                localStorage.setItem('user', JSON.stringify(snapshot.val()));

                swal("Good Job Lg In Success")
                setTimeout(function() {
                    location = "confirmCarrers.html"
                }, 2000)
            })
        })
        .catch(function(error) {
            // Handle Error
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorMessage === "auth/wrong-password") {
                swal("Opps Wrong Password Error")
            } else {
                swal("Ooops Registers Account.." + errorMessage + " error")
            }
            console.log(error)
        })
} // signIn







function signUp() {
    location = "register.html"
}



// 
// 
// 
// 

let eventsPanel = document.getElementById("events");
    var div1 = document.createElement("DIV")
    div1.className = "boxes nth";

    div1.className = "col s12 m7";
    var div2 = document.createElement("DIV")
    div2.className = "card-body";
    
    let h1 = document.createElement("label");
    h1.setAttribute("class", "form-check-label");
    let formCheckLabelText1 = document.createElement("input");
    formCheckLabelText1.setAttribute("id", "userr")
    formCheckLabelText1.setAttribute("type", "checkbox")
    formCheckLabelText1.setAttribute("class", "form-check-input mr-1")
    let textH1 = document.createTextNode('Register for job alerts');
    h1.appendChild(formCheckLabelText1);
    h1.style ="font-size : 160%;";
    h1.appendChild(textH1);

    var h2 = document.createElement("small")
    h2.className = "center-align flow-text card-title muted"
    h2.style = "display:block";
    var textH2 = document.createTextNode("Register with your social profile");


    let h2date = document.createElement("P");
    let textH2date = document.createTextNode('Sign up using our form below to enjoy personalised job alerts, a quick apply process, and more. ');

    let h2note = document.createElement('h6')
    h2note.className = "font-weight-bold text-warning"
    let texth2note = document.createTextNode('  NOTE:')


    let h3Desc = document.createElement("DIV");
    h3Desc.style = "color:black"
    let textH3Desc = document.createTextNode('Password must be min 8 characters and include an upper & lower case letter, and a number or special character.');
    
    
    let pend = document.createElement('P')
    let textPend = document.createTextNode("Don't have a CV to hand? That's fine, register below with your social profiles and upload one at a later stage.")
    
    
    let alink = document.createElement('A')
    alink.setAttribute('href' , 'contact.html')
    let textalink = document.createTextNode(' Click Here')
    alink.appendChild(textalink)



    var gbtn = document.createElement("BUTTON");
    gbtn.className = "waves-effect btn btn-info btn-sm"
    var gbtnText = document.createTextNode("Apply Jobs");
    gbtn.appendChild(gbtnText);
    gbtn.onclick = function() {
        goingFunc() // obj.userName
        gbtn.style.display = "none";
        var p = document.createElement("P");
        p.innerHTML = "Log in Your Account"
        p.style.fontSize = "10px;"
        p.className = "red-text right-align; "
        cardContent.appendChild(p);
    }

    h1.appendChild(textH1)
    h2date.appendChild(textH2date);
    h2note.appendChild(texth2note);
    pend.appendChild(textPend);
    h3Desc.appendChild(textH3Desc);
    h2.appendChild(textH2)

    var cardStack = document.createElement("DIV");
    cardStack.className = "p-2 card-stacked hoverable";

    var cardContent = document.createElement("DIV");
    cardContent.className = "card-content";

    var hr  = document.createElement('HR')
    var br  = document.createElement('BR')

    eventsPanel.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(cardStack);
    cardStack.appendChild(cardContent);
    cardContent.appendChild(h1);
    cardContent.appendChild(h2date);
    cardContent.appendChild(h2note);
    cardContent.appendChild(h3Desc);
    cardContent.appendChild(hr);
    cardContent.appendChild(h2);
    cardContent.appendChild(pend);
    pend.appendChild(alink);
    cardContent.appendChild(br);
    cardContent.appendChild(gbtn);

// 
// 
// 

function goingFunc() {
    swal(
        'Oops Create your Raisers account',
        'THE RAISERS BUILDERS & DEVELOPERS (PVT) LTD'
    )
};
