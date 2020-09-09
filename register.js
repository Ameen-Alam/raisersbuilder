// After uesr carrers LOgin
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


    let database = firebase.database().ref('/');
    let auth = firebase.auth();
    let email = document.getElementById("email");
    let pswrd = document.getElementById("passowrd");
    let confirmPswrd = document.getElementById("confirm_password");
    let sign_up = document.getElementById("sign_up");

    let firstName = document.getElementById("firstName");
    let middleName = document.getElementById("middleName");
    let lastName = document.getElementById("lastName");
    let mail = document.getElementById("aEmail");
    let dathOfBirth = document.getElementById("dob");
    let mbl = document.getElementById("phone");
    let mblTwo = document.getElementById("phoneNum");
    let nationality = document.getElementById("nationality");
    let city = document.getElementById("city");
    let maritalStatus = document.getElementById("maritalStatus");
    let state = document.getElementById("state");
    let pAddress = document.getElementById("pAddress");
    let rAddress = document.getElementById("rAddress");
    document.querySelector('.alert').style.display = 'block';

let signUp = document.getElementById("signUp");
let signUpButton = document.getElementById("signUpButton");


signUpButton.onclick = function() {
    swal('Scroll The Page click Save Button','Scroll the page, turn on the information')
} 
// 
// 
// 
// 
// 
signUp.onclick = function() {
    let fName = firstName.value;
    let mName = middleName.value;
    let lName = lastName.value;
    let email = mail.value;
    let password = pswrd.value;
    let confirmPassword = confirmPswrd.value;
    let mobil = mbl.value;
    let mobilTwo = mblTwo.value;
    let dob = dathOfBirth.value;

    let natlity = nationality.value;
    let cty = city.value;
    let marital = maritalStatus.value;
    let stat = state.value;
    let parAddress = pAddress.value;
    let resAddress = rAddress.value;



    if (fName === "") {
        firstName.focus();
        swal(
            "Ooops!",
            'First Name Cannot be NULL',
            'error'
        )
    } else if (mName === "") {
        middleName.focus();
        swal(
            "Ooops!",
            'Middle Name Cannot be NULL',
            'error'
        )
    } else if (mobil === "" | mobilTwo === "") {
        mblTwo.focus();
        swal(
            "Ooops!",
            'Cell Num Cannot be NULL',
            'error'
        )
    } else if (email === "") {
        mail.focus();
        swal(
            "Ooops!",
            'Email Cannot be NULL',
            'error'
        )
    } else if (resAddress === "") {
        rAddress.focus();
        swal(
            "Ooops!",
            'resident Address Cannot be NULL',
            'error'
        )
    } else if (password === "" | confirmPassword === "") {
        pswrd.focus();
        swal(
            "Ooops!",
            'Password Cannot be NULL',
            'error'
        )
    } else if (password !== confirmPassword) {
        pswrd.focus();
        confirmPswrd.focus();
        swal(
            "Ooops!",
            'Password Not match',
            'error'
        )
    } else {
        let signUpUser = {
                name: fName + " " + mName +" " + lName ,
                gmail: email,
                pword: password,
                cell: mobil + '' + mobilTwo ,
                dOfb: "D.O.B : " + dob + "  Marital:" + marital ,
                nationalty : "nationalty: "+ natlity + "  city:" + cty + "  state:" + stat ,
                Add :"Parminent Address: " + parAddress + "  Residential Address: " + resAddress,
                            } // objext

        auth.createUserWithEmailAndPassword(signUpUser.gmail, signUpUser.pword)
            .then(function(res) {
                signUpUser.userID = res.uid;
                database.child('user/' + res.uid).set(signUpUser)
                    .then(function() {
                        swal(
                            'Good Job',
                            'Sign Up Successful',
                            'success'
                        )
                        setTimeout(function() {
                            location = "careers.html"
                        }, 2000)
                    })
                console.log(res)
                fName = "";
                mName = "";
                lName = "";
                email = "";
                password = "";
                confirmPassword = "";
                mobil = "";
                mobilTwo = "";
                dob = "";
                natlity = "";
                cty = "";
                marital = "";
                stat = "";
                parAddress = "";
                resAddress = "";
            })
            .catch(function(error) {
                // Handle Error Here
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    swal(
                        'Ooops',
                        'Your Password is to weak',
                        'error'
                    )
                } else {
                    swal(
                        'Ooops',
                        errorMessage,
                        'error'
                    )
                } // else
                console.log(error)
            })
    } //else Main

} // sign up function
