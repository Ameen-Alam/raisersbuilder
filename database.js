// After Admin LOgin
// ADMIN LOGIN 
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



    let signOut = document.getElementById("signOut");
    let user = localStorage.getItem("user");
    let convertUser = JSON.parse(user);
    // let userUID = convertUser.uid
    let database = firebase.database().ref('/')
    
    let wName = document.getElementById("wName");
    let wEmail = document.getElementById("wEmail");
    
    // wName.innerHTML = convertUser.name;
    // wEmail.innerHTML = convertUser.gmail;
    

signOut.onclick = () => {
    localStorage.clear();
    window.location.replace("adminabc.html") //
}
/*

contct output page see who should Contact you

*/
//   contact
// refrence manage collection
let contact = document.getElementById("contact")
let messageRefa = firebase.database().ref('messages');
messageRefa.on("child_added", function(snapshot) {
    let obj = snapshot.val();
    obj.id = snapshot.key;
    render(obj);
})

function render(user) {
    let data = user.date
    let datee= document.createElement("p");
    let textdatee = document.createTextNode('Sender Date :  '  + data + "    ");
    let p1 = document.createElement("p");
    let text1 = document.createTextNode('Name :  '  + user.name + "    ");
    let p2 = document.createElement("p");
    let text2 = document.createTextNode('Phone :  ' + user.phone + "    ");
    let p3 = document.createElement("p");
    let text3 = document.createTextNode('Email : ' + user.email + "    ");
    let p4 = document.createElement("p");
    let text4 = document.createTextNode('User Source : ' + user.source + "    ");
    let p5 = document.createElement("p");
    let text5 = document.createTextNode('Message : ' + user.message + "    ");
    datee.appendChild(textdatee);
    p1.appendChild(text1);
    p2.appendChild(text2);
    p3.appendChild(text3);
    p4.appendChild(text4);
    p5.appendChild(text5);
    let contactDiv = document.createElement("DIV");
    contactDiv.setAttribute("class", "row my-2 text-dark mainContact")
    datee.setAttribute("id", user.id);
    datee.setAttribute("class", "w-100 text-center bg-dark text-white");
    datee.style = "border-radius : 40%;"
    contactDiv.appendChild(datee);
    // contact.appendChild(datee);
    p1.setAttribute("id", user.id);
    p1.setAttribute("class", "px-3 font-weight-bold");
    contactDiv.appendChild(p1);
    p2.setAttribute("id", user.id);
    p2.setAttribute("class", "px-3 font-weight-bold");
    contactDiv.appendChild(p2);
    p3.setAttribute("id", user.id);
    p3.setAttribute("class", "px-3 font-weight-bold");
    contactDiv.appendChild(p3);
    p4.setAttribute("id", user.id);
    p4.setAttribute("class", "px-3");
    contactDiv.appendChild(p4);
    p5.setAttribute("id", user.id);
    p5.setAttribute("class", "px-3  w-100 box");
    p5.style = "font-size : 140%"
    contactDiv.appendChild(p5);
    let hrhr = document.createElement('HR');
    hrhr.className = "bg-info"
    contact.appendChild(contactDiv);
    contact.appendChild(hrhr);
}
// end contact
/*

Select Carrer TYpe New Carrer Job FOR GOOD THinks new Jobs 

*/
// Data Base Input Carrers
// refrence manage collection
let carrersRef = firebase.database().ref('carrers');
// submit form
function carrers() {
    // Get values
    let carrerHeadding = getInputVal('carrerHeadding').value;
    let carrerDayDate = getInputVal('carrerDayDate').value;
    let carrerText = getInputVal('carrerText').value;
    // save carrers
    savecarrers(carrerHeadding, carrerDayDate, carrerText)
        // show alert
    document.querySelector('.alert').style.display = 'block';
    // hide alert after 3 seconds
    setTimeout(function() {
            document.querySelector('.alert').style.display = 'none';
        }, 3000)
        // clear form
    document.getElementById("submitCarrers").reset();
    console.log(carrerHeadding + carrerDayDate + carrerText);
}
// Function to get get form value
function getInputVal(id) {
    return document.getElementById(id);
}

// save carrerss to firebase

function savecarrers(carrerHeadding, carrerDayDate, carrerText) {
    let newcarrersRef = carrersRef.push();
    newcarrersRef.set({
        carrerHeadding: carrerHeadding,
        carrerDayDate: carrerDayDate,
        carrerText: 'carrerText',
    });
}

// END Data Base Input Carrers
/*

Events Input Page Set Your Events What And When ANd Where With IMG ONLINE LINK

*/
// events
// refrence manage collection
// let submitEventsForm = document.getElementById("submitCarrersForm");
let eventsRef = firebase.database().ref('events');
// submit form
function events() {
    // Get values
    let eventsHeadding = getInputVal('eventsHeadding').value;
    let eventsImg = getInputVal('eventsImg').value;
    let eventsText = getInputVal('eventsText').value;
    // save carrers
    saveEvents(eventsHeadding, eventsImg, eventsText)
        // show alert
    document.querySelector('.alert').style.display = 'block';
    // hide alert after 3 seconds
    setTimeout(function() {
            document.querySelector('.alert').style.display = 'none';
        }, 3000)
        // clear form
    document.getElementById("submitEvents").reset();
    console.log(eventsHeadding + eventsImg + eventsText);
}
// Function to get get form value
function getInputVal(id) {
    return document.getElementById(id);
}

// save Events to firebase

function saveEvents(eventsHeadding, eventsImg, eventsText) {
    let newEventsRef = eventsRef.push();
    newEventsRef.set({
        eventsHeadding: eventsHeadding,
        eventsImg: eventsImg,
        eventsText: eventsText
    });
}
// End events
/*

For Carrer Front Page Output Carrer See Full Detail For Employ!

*/
// For-Job-Carrer- Page







// End For-Job-Carrer- Page
/*

End Data BAse Page For Adim LOgin ITS Secreate 
Page don't use to some one else Without Admin MAN

 */
let careersFront = document.getElementById("careersFront");
let messageRef = firebase.database().ref('Users');
messageRef.on("child_added", function(snapshot) {
    let obj = snapshot.val();
    obj.id = snapshot.key;
    rnder(obj);
})

function rnder(user) {
    let mainContact = document.createElement("DIV");
    mainContact.setAttribute("class", "row bg-yellow my-3 py-3  mainContact font-weight-bold");

    //name 
    let pName = document.createElement("DIV");
    pName.setAttribute("class", "col-lg-6")
    let nameText = document.createTextNode(user.name)
    pName.appendChild(nameText);
    mainContact.appendChild(pName);
    // email
    let pemail = document.createElement("DIV");
    pemail.setAttribute("class", "col-lg-5")
    let emailText = document.createTextNode(user.email)
    pemail.appendChild(emailText);
    mainContact.appendChild(pemail);
    //dobPhone
    let pdobPhone = document.createElement("DIV");
    pdobPhone.setAttribute("class", "col-lg-6")
    let dobPhoneText = document.createTextNode(user.dobPhone)
    pdobPhone.appendChild(dobPhoneText);
    mainContact.appendChild(pdobPhone);
    // state
    let pstate = document.createElement("DIV");
    pstate.setAttribute("class", "col-lg-5")
    let stateText = document.createTextNode(user.state)
    pstate.appendChild(stateText);
    mainContact.appendChild(pstate);
    // city
    let pcity = document.createElement("DIV");
    pcity.setAttribute("class", "col-lg-6")
    let cityText = document.createTextNode(user.city)
    pcity.appendChild(cityText);
    mainContact.appendChild(pcity);
    // address
    let paddress = document.createElement("DIV");
    paddress.setAttribute("class", "col-lg-12")
    let addressText = document.createTextNode(user.address)
    paddress.appendChild(addressText);
    mainContact.appendChild(paddress);
    // JOB
    let pjob = document.createElement("DIV");
    pjob.setAttribute("class", "col-lg-12")
    let jobText = document.createTextNode(user.job)
    pjob.appendChild(jobText);
    mainContact.appendChild(pjob);

    let hr = document.createElement("HR");
    careersFront.appendChild(mainContact);
    careersFront.appendChild(hr);
}
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 





let eventName = document.getElementById("eventName");
let eventDate = document.getElementById("evemtDate");
let description = document.getElementById("description");
let createP = document.getElementById("createP");


createP.onclick = function() {
    if (eventName.value === "") {
        swal(
            'OOps...',
            'Event Name is Empty',
            'error'
        )
        eventName.focus();
    } else if (eventDate.value === "") {
        swal(
            'OOps...',
            'Event Date is Empty',
            'error'
        )
    } else if (description.value === "") {
        swal(
            'OOps...',
            'description is Empty',
            'error'
        )
    } else {
        var eventsCreate = {
            userName: convertUser.name,
            nameOfEvent: eventName.value,
            dateOfEvent: eventDate.value,
            detailsOfEvent: description.value,
            gmail: convertUser.gmail,
            name : convertUser.name,
            phone : convertUser.cell,
            dob : convertUser.dOfb,
            nationality : convertUser.nationalty,
            address : convertUser.Add,
        };
        // console.log(eventsCreate);
        database.child("eventsCreate").push(eventsCreate);
        eventName.value = "";
        eventDate.value = "";
        description.value = "";
    }
}

var mail = convertUser.mail;
var eventsPanel = document.getElementById("eventsPanel");

database.child("eventsCreate").on("child_added", function(snap) {
    var obj = snap.val()
    obj.key = snap.key
        // console.log(convertUser.mail)
    if (obj.mail === convertUser.mail) {
        var div1 = document.createElement("DIV")
        div1.style = "border-style:solid; border-width: 0px 10px 0px 10px; border-color:darkgrey ; border-radius: 10px" ;

        div1.className = "col s12 m7";
        div1.setAttribute("id", obj.key);
        var div2 = document.createElement("DIV")
        div2.className = "card horizontal box";

        var h1 = document.createElement("H1")
        var textH1 = document.createTextNode(obj.nameOfEvent)
        h1.className = "center-align flow-text text-center"
        h1.style = "font-size: 50px";

        var h2 = document.createElement("H6")
        h2.className = "center-align flow-text"
        h2.style = "font-weight:bolder";
        var textH2 = document.createTextNode("Created By: " + obj.userName);


        var h2date = document.createElement("H5")
        h2date.className = "center-align flow-text"
        var textH2date = document.createTextNode(obj.dateOfEvent);


        var h3Desc = document.createElement("p")
        h3Desc.className = "center-align flow-text"
        var textH3Desc = document.createTextNode(obj.detailsOfEvent);

        var delbtn = document.createElement("BUTTON");
        delbtn.className = "waves-effect waves-light btn red right"
        var delbtnText = document.createTextNode("DELETE");
        delbtn.appendChild(delbtnText);
        delbtn.onclick = function() {
            remove(obj.key);
        };
        var editbtn = document.createElement("BUTTON");
        editbtn.className = "waves-effect waves-light btn light-blue right"
        var editbtnText = document.createTextNode("EDIT");
        editbtn.appendChild(editbtnText);
        editbtn.onclick = function() {
            editEvent(obj.key, obj.nameOfEvent, obj.dateOfEvent, obj.timeOfEvent, obj.detailsOfEvent, obj.userName)
        }
        
        h1.appendChild(textH1)
        h3Desc.appendChild(textH3Desc);
        h2date.appendChild(textH2date);
        h2.appendChild(textH2)
        
        // console.log(h4)
        
        var cardStack = document.createElement("DIV");
        cardStack.className = "card-stacked hoverable";
        
        var cardContent = document.createElement("DIV");
        cardContent.className = "card-content p-3";
        
        eventsPanel.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(cardStack);
        cardStack.appendChild(cardContent);
        cardContent.appendChild(h1);
        cardContent.appendChild(h3Desc);
        var br = document.createElement('BR')

        cardContent.appendChild(br);
        cardContent.appendChild(h2date);
        cardContent.appendChild(h2);
        cardContent.appendChild(delbtn);
        cardContent.appendChild(editbtn);
        console.log(eventsPanel)
    }

});

function remove(key) {
    database.child("eventsCreate/" + key).remove();
}
database.child("eventsCreate").on("child_removed", function(data) {
    var deleted = document.getElementById(data.key);
    deleted.remove();
    swal("Successfully Removed")
});

function editEvent(key, Ename, date, Time, details, uName) {
    var neweventname = prompt('Edit Event Name', Ename);
    var newdate = prompt('Edit date', date);
    var newdescription = prompt('Edit description', details);
    var newOrganizer = prompt('Edit Organizer', uName);

    var newEventData = {
        nameOfEvent: neweventname,
        dateOfEvent: newdate,
        detailsOfEvent: newdescription,
        userName: uName + '&  Edited:'  +convertUser.name +" ...",
        // mail: mail
    }

    if (newEventData !== '') { // check if the value is not empty
        var updates = {};
        updates[key] = newEventData;
        database.child("eventsCreate").update(updates);
        location.reload("#")

    }

}









// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 





var eventsPanels = document.getElementById("eventsPanels");
var mail = convertUser.mail;

database.child("goingEvent").on("child_added", function(snap) {
    var obj = snap.val()
    obj.key = snap.key
    console.log(obj)
    var div1 = document.createElement("DIV")
    div1.style = "border-style:solid; border-width: 0px 20px 0px 20px; border-color:darkgrey ; border-radius: 40%";

    div1.className = "col s12 m7";
    div1.setAttribute("id", obj.key);
    var div2 = document.createElement("DIV")
    div2.className = "card horizontal";

    var h1 = document.createElement("p")
    var textH1 = document.createTextNode( "04  :  Job Name : " +obj.nameOfEvent )
    h1.className = "center-align flow-text font-weight-bold"

    var h1time = document.createElement("p")
    var texth1time = document.createTextNode(obj.dateOfEvent)
    h1time.className = "center-align flow-text text-center bg-dark text-white"
    h1time.style = "border-radius : 40%"

    var h2 = document.createElement("H4")
    h2.className = "center-align flow-text"
    h2.style = "font-weight:bolder";
    var textH2 = document.createTextNode("Name : " + obj.name);


    var h2date = document.createElement("p")
    h2date.className = "center-align flow-text"
    var textH2date = document.createTextNode(" 03 : " + obj.dob);


    var h2time = document.createElement("H4")
    h2time.className = "center-align flow-text font-weight-bold"
    var textH2time = document.createTextNode("01 : Cell Num : " + obj.phone + "   email : " + obj.gmail);

    var h3Desc = document.createElement("p")
    h3Desc.className = "center-align flow-text"
    var textH3Desc = document.createTextNode( "02 : " + obj.address);

    var ngbtn = document.createElement("BUTTON");
    ngbtn.className = "waves-effect waves-light btn-sm btn red"
    var ngbtnText = document.createTextNode("Delete");
    ngbtn.onclick = function() {
        remove(obj.key);
    }
    ngbtn.appendChild(ngbtnText);



    h1.appendChild(textH1)
    h1time.appendChild(texth1time)
    h2date.appendChild(textH2date);
    h2time.appendChild(textH2time);
    h3Desc.appendChild(textH3Desc);
    h2.appendChild(textH2)

    // console.log(h4)

    var cardStack = document.createElement("DIV");
    cardStack.className = "card-stacked hoverable";

    var cardContent = document.createElement("DIV");
    cardContent.className = "card-content";
    let thisHR = document.createElement('HR')
    thisHR.className = "bg-info"
    eventsPanels.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(cardStack);
    cardStack.appendChild(cardContent);
    cardContent.appendChild(h1time);
    cardContent.appendChild(h2);
    cardContent.appendChild(h2time);
    cardContent.appendChild(h3Desc);
    cardContent.appendChild(h2date);
    cardContent.appendChild(h1);
    cardContent.appendChild(ngbtn)
    cardContent.appendChild(thisHR)
        // cardContent.appendChild(delbtn);
        // cardContent.appendChild(editbtn);

});


function remove(key) {
    database.child("goingEvent/" + key).remove();
}
database.child("goingEvent").on("child_removed", function(data) {
    var deleted = document.getElementById(data.key);
    deleted.remove();
    swal(
        "Oh!",
        "Delete Job",
        "info"
    )
})