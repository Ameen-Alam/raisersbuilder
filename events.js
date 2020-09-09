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
//   contact
// refrence manage collection
var carrers = document.getElementById("events")
var eventsRef = firebase.database().ref('events');
eventsRef.on("child_added" , function(snapshot){
    var obj = snapshot.val();
    obj.id = snapshot.key;
    render(obj);
})
function render(user){
    var eventsCard = document.createElement("DIV");
    eventsCard.setAttribute("class", "card");
    var eventsCardHeader = document.createElement("DIV");
    eventsCardHeader.setAttribute("class", "card-header")
    eventsCardHeader.setAttribute("id", "headingfour");
    eventsCardHeader.setAttribute("role", "tab");
    var eventsCardHeaderH5 = document.createElement("H5");
    eventsCardHeaderH5.setAttribute("class", "mb-0");
    var eventsCardHeaderH5A = document.createElement("A");
    eventsCardHeaderH5A.setAttribute("class" , "collapsed")
    eventsCardHeaderH5A.setAttribute("data-toggle", "collapsed")
    eventsCardHeaderH5A.setAttribute("href" , "#collapsefour")
    eventsCardHeaderH5A.setAttribute("aria-controls" , "collapsefour")
    eventsCardHeaderH5A.setAttribute("aria-expanded", "false")
    var eventsCardHeaderH5AText = document.createTextNode(user.eventsHeadding)
    eventsCardHeaderH5A.appendChild(eventsCardHeaderH5AText);
    eventsCardHeaderH5.appendChild(eventsCardHeaderH5A)
    eventsCardHeader.appendChild(eventsCardHeaderH5);
    var collapseShow = document.createElement("DIV");
    collapseShow.setAttribute("class", "collapse show")
    collapseShow.setAttribute("id", "collapsefour")
    collapseShow.setAttribute("role", "tabpanel")
    collapseShow.setAttribute("aria-labelledby", "headingfour")
    collapseShow.setAttribute("data-parent", "#accordion")
    var cardBody = document.createElement("DIV");
    cardBody.setAttribute("class", "card-body")
    var imgDiv = document.createElement("DIV");
    imgDiv.setAttribute("class", "img-responsive view overlay hm-blue-slight");
    imgDiv.setAttribute("style", "margin-bottom:15px;");
    var imgDivImg = document.createElement("IMG");
    imgDivImg.setAttribute("class", "w-100");
    imgDivImg.setAttribute("src", user.eventsImg);
    imgDiv.appendChild(imgDivImg);
    var imgDivWavesEffect = document.createElement("DIV");
    imgDivWavesEffect.setAttribute("class", "mask waves-effect waves-light")
    imgDiv.appendChild(imgDivWavesEffect);
    cardBody.appendChild(imgDiv);
    var eventsDivText = document.createElement("DIV");
    var eventsDivTextP = document.createElement("P");
    var eventsDivTextPText = document.createTextNode(user.eventsText);
    eventsDivTextP.appendChild(eventsDivTextPText);
    eventsDivText.appendChild(eventsDivTextP);
    cardBody.appendChild(eventsDivText);
    collapseShow.appendChild(cardBody);
    eventsCard.appendChild(eventsCardHeader);
    eventsCard.appendChild(collapseShow);
    // var eventsCardLast = eventsCard.lastChild;
    events.appendChild(eventsCard);
}