
var firebaseConfig = {
    apiKey: "AIzaSyDb3czHli-JMhP53hUQqrWllZEeFE2BxWU",
    authDomain: "crazy-coders-97bfb.firebaseapp.com",
    projectId: "crazy-coders-97bfb",
    storageBucket: "crazy-coders-97bfb.appspot.com",
    messagingSenderId: "562013058630",
    appId: "1:562013058630:web:a52425bb48f9dfb7183c47"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("contuct us")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission

submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()

    //Get Form Values
    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    let subject = document.getElementById('subject').value
    let country = document.getElementById('country').value
    let email = document.getElementById('emailbox').value

    //Save Form Data To Firebase
    db.doc().set({
        fname: firstName,
        lname: lastName,
        email:email,
        country: country,
        subject:subject
    }).then( () => {
        console.log("Data saved")
    }).catch((error) => {
        console.log(error)
    })

    //alert
    alert("Your Form Has Been Submitted Successfully")
})

//history

