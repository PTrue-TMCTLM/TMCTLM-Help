var EmailInput = document.getElementById("EmailInput")
var PassInput = document.getElementById("PassInput")

function loginEmail(){
    firebase.auth().signInWithEmailAndPassword(EmailInput, PassInput)
    .then((user) => {
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}