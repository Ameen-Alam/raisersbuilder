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


//   contact

let signOut = document.getElementById("signOut");
let user = localStorage.getItem("user");
let convertUser = JSON.parse(user);
let userUID = convertUser.userID
let database = firebase.database().ref('/')

let wName = document.getElementById("wName");
let wEmail = document.getElementById("wEmail");

wName.innerHTML = convertUser.name;
wEmail.innerHTML = convertUser.gmail;

// refrence manage collection
let carrers = document.getElementById("carrers")
let messageRef = firebase.database().ref('carrers');
let nameName = document.getElementById('nameName');

signOut.onclick = () => {
    localStorage.clear();
    window.location.replace("careers.html") //
}

// 
let eventsPanel = document.getElementById("eventsPanel");
database.child("eventsCreate").on("child_added", function(snap) {    
    var obj = snap.val();
    obj.key = snap.key
    console.log(obj);
    var div1 = document.createElement("DIV")
    div1.className = "boxes nth";

    div1.className = "col s12 m7";
    div1.setAttribute("id", obj.key);
    var div2 = document.createElement("DIV")
    div2.className = "card-body";
    
    let h1 = document.createElement("label");
    h1.setAttribute("class", "form-check-label");
    h1.setAttribute("id", user.id);
    let formCheckLabelText1 = document.createElement("input");
    formCheckLabelText1.setAttribute("id", "userr")
    formCheckLabelText1.setAttribute("type", "checkbox")
    formCheckLabelText1.setAttribute("class", "form-check-input mr-1")
    let textH1 = document.createTextNode(obj.nameOfEvent);
    h1.appendChild(formCheckLabelText1);
    h1.style ="font-size : 160%;";
    h1.appendChild(textH1);

    var h2 = document.createElement("small")
    h2.className = "center-align flow-text card-title muted"
    h2.style = "display:block";
    var textH2 = document.createTextNode("Raisers Refer by : " + obj.userName);


    let h2date = document.createElement("DIV");
    h2date.setAttribute("id", user.id);
    let textH2date = document.createTextNode(obj.dateOfEvent);


    let h3Desc = document.createElement("DIV");
    h3Desc.setAttribute("id", user.id);
    h3Desc.style = "color:black"
    let textH3Desc = document.createTextNode(obj.detailsOfEvent);
    
    var gbtn = document.createElement("BUTTON");
    gbtn.className = "waves-effect btn btn-info btn-sm"
    var gbtnText = document.createTextNode("Apply Here");
    gbtn.appendChild(gbtnText);
    gbtn.onclick = function() {
        goingFunc(obj.key, obj.nameOfEvent, obj.dateOfEvent,  obj.detailsOfEvent, obj.userName , ) // obj.userName
        gbtn.style.display = "none";
        var p = document.createElement("P");
        p.innerHTML = "Many will soon be confirmation email Sand"
        p.style.fontSize = "10px;"
        p.className = "red-text right-align; "
        cardContent.appendChild(p);
    }

    h1.appendChild(textH1)
    h2date.appendChild(textH2date);
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
    cardContent.appendChild(h3Desc);
    cardContent.appendChild(h2);
    cardContent.appendChild(gbtn);
    cardContent.appendChild(hr);
    cardContent.appendChild(br);
});
// 
// 
// 

var datetime =  new Date().toLocaleString();
function goingFunc(id, event_Name, event_Date, event_Details, user_Name) {
    
    var goingEvent = {
        id: id,
        nameOfEvent: event_Name,
        dateOfEvent:  " Sender Date :" + datetime + "  &  " +" Raisers Job-Date " +  event_Date,
        detailsOfEvent: event_Details,
        userName: user_Name,
        gmail: convertUser.gmail,
        name : convertUser.name,
        phone : convertUser.cell,
        dob : convertUser.dOfb,
        nationality : convertUser.nationalty,
        address : convertUser.Add,
    };
    database.child("goingEvent").push(goingEvent).then()
    swal(
        'Thank you for applying Raisers',
        'Your resume  has been received'
    )
};
