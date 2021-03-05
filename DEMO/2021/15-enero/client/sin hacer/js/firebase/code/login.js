var EmailInput = document.getElementById("EmailInput");
var PassInput = document.getElementById("PassInput");

function login() {
  firebase
    .auth()
    .signInWithEmailAndPassword(EmailInput, PassInput)
    .then((user) => {})
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    location.href='index.html'
  } else {
    // User is signed out
    // ...
  }
});
