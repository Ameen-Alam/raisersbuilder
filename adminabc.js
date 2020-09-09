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


// ADMIN LOGIN 
  // Initialize Firebase


    let inEmail = getInputVal("email");
    let inPpassword = getInputVal("password");
    let signIn = getInputVal("signIn");
    let database = firebase.database().ref('/');
    let auth = firebase.auth(); // access authentication service
// document.getElementById("contactForm").addEventListener('submit', logInAdmin);

signIn.onclick = function submit(event) {
    event.preventDefault();
    let user = {
        email: inEmail.value,
        password: inPpassword.value
    };
if(user.email === 'database@gmail.com'){
    auth.signInWithEmailAndPassword(user.email, user.password)
        .then(function(success) {
            database.child('user/' + success.uid).once('value', function(snapshot) {
                console.log(snapshot.val());
                localStorage.setItem('user', JSON.stringify(snapshot.val()));

                swal("Good Job Lg In Success")
                setTimeout(function() {
                    location = "database.html"
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
                swal("Ooops " + errorMessage + " error")
            }
            console.log(error)
        })
}
} // signIn



// function logInAdmin() {
//     let email = emailInput.value;
//     let password = passwordInput.value;

//     auth.signInWithEmailAndPassword(email, password)
//         .then(function(user) {
//             location = 'database.html';
//         })
//         .catch(function(error) {
//             swal(error.message);
//         })
// }

function getInputVal(id) {
    return document.getElementById(id);
}






/*
//   // Initialize Firebase
//   let config = {
//     apiKey: "AIzaSyDAU4nLzRTj3UmsFq8CfwdPo3RBLz7Y5Xc",
//     authDomain: "raisersbuilder1.firebaseapp.com",
//     databaseURL: "https://raisersbuilder1.firebaseio.com",
//     projectId: "raisersbuilder1",
//     storageBucket: "raisersbuilder1.appspot.com",
//     messagingSenderId: "816755828360"
//   };
//   firebase.initializeApp(config);
  
// lisent for form submit 
document.getElementById("contactForm").addEventListener('submit', logInAdmin);

function logInAdmin(e){
    e.preventDefault();

    // Get values
    let email = getInputVal('email');
    let password = getInputVal('password');
    // console.log(name + email + phone + source + message);
    console.log(email + " " + password);
}
// Function to get get form value
function getInputVal(id){
    return document.getElementById(id).value;
}
*/

/* 

/* 
  'National Response Centre for Cyber Crimes (NR3C), FIA?s wing for dealing with cyber crimes, yesterday inaugurated an SMS alert system for masses in the country to aware them about cyber crimes.'+
                 'NR3C, under this new initiative, will send out SMS alerts to Pakistani mobile phone users about trending cyber crimes, including but not limited to fake lotteries, money prizes1, fake ads, Facebook security, privacy matters and so on.'+
                 ' NR3C told ProPakistani that information about usual fraud types, and other cyber crimes will be communicated to masses. It said that aim is to aware users about any possible cyber threats they might face in their usual lives.'+
                 'Currently NR3C is using a paid SMS service from a telco with monthly capacity of 10,000 SMS broadcast, but agency is working on getting in touch with PTA to partner with telcos to get more subscribers covered.'+
                 'Register Your Complaint About Cyber Crimes'+
                 'NR3C has also enhanced its internal system to make sure that cyber crime complaints registered with the agency are processed more quickly and efficiently.'+
                 'Anyone, registering a complaint with Nr3C, will now get a complaint number that can be followed up with the agency for outcomes. NR3C said that it has enhanced its internal complaint management system in a way that now complaints will be processed with-in a day and any possible outcomes will be communicated to complainant with-in a week.'+
                 'Citizens can register their complaints with NR3C about any cyber crime using below methods:'+
                 'SMS/Call your problem to this number: 0336-6006060'+
                 ' Tel: # 051-9106384'+
                 'Email your complaint: helpdesk@nr3c.gov.pk'+
                 'Send Hard copy of your complaint to this address:'+
                 'National Response Centre for Cyber Crimes'+
                 'A more detailed post on how to report any cyber crimes or to register your complaint with Cyber Crime Wing if FIA is'+
                 'How to Register Complaint with FIA '+
                 '(Cyber Crime Wing)'+
                 'As we are getting into internet era, cyber crime rates are hiking in similar manner. Many of us don?t know how to legally challenge those criminal activities.'+
                 'A common internet or mobile phone user, who is victim of a cyber crime, thinks that there is no one to listen his/her pleas. Many of victims end up not registering any complaint.'+
                 'If you are victim of any sort of cyber crime, don?t sit idle, this is the time to react to get the culprits behind the bars. Registering a complaint with FIA?s cyber crime wing is very simple, and even does not require you to go anywhere.'+
                 'Simply write down your application (in English or in Urdu), narrate your complete problem, provide as much evidences, details as you can and send it to FIA National Response Center for Cyber Crimes(NR3C).'+
                 'Address this application to'+
                 'To Director Cyber Crimes'+
                 'FIA Heaquarters, Islamabad'+
                 'Write down your problem, with complete details? and in the end mention your name, contact numbers and addresses.'+
                 'Fax: 051-9266435'+
                 'Email: helpdesk@nr3c.gov.pk'+
                 'In case of email, you will get a response email in 24 hours however it may take 7 days to get a letter by post at your given address in case of fax. You will be given a tracking number of your complaint, with what you may check the status of your complaint latter on.'+
                 'Please note that FIA accepts applications in only these two formats. Cyber Crime wing will not act unless you write them email or FAX. This is sort of FIR you register with Police.'+
                 'If you want to know what crimes come under Cyber Crime, read this PDF document (Electronic crimes related laws in Pakistan)2.'+
                 'You may call FIA Nr3C offices for consultation ? Contact details are available here'+
                 'Tip: Don?t shy or fear of anything ? FIA NR3C guys are pretty helping and very cool. If you are a victim, simply reach them at earliest.'+
                 'Here are more contact details of FIA Cyber Crime Wing:'+
                 'Project Director'+
                 'National Response Center for Cyber Crimes'+
                 'FIA Head Quarter'+
                 'G-9/4, Islamabad'+
                 'Tel: # 051-9106380'+
                 'Fax: # 051-9106383'+
                 'Help Desk'+
                 'National Response Center for Cyber Crimes'+
                 'FIA Head Quarter'+
                 'G-9/4, Islamabad'+
                 'Tel: # 051-9106384'+
                 'Cell: # 0336-6006060'+
                 'Fax: # 051-9106383'+
                 'Email: helpdesk@nr3c.gov.pk'+
                 'Beware: Fraudsters Use SMS Spoofing to Target Mobile Users with Fake Prizes'
*/
/**/