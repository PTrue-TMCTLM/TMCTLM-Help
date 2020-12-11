var email = document.getElementById("inputCorreo");
var password = document.getElementById("inputPassword");

var uid, displayName, photoURL, email2;

function registro() {
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((user) => {
      window.location.replace('../index.html'); 
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });

}

function iniciosesion() {
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((user) => {
    window.location.replace('../index.html'); 
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
}


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    uid = user.uid;
    displayName = user.displayName
    photoURL = user.photoURL
    email2 = user.email
    var email2local = user.email

        // Crear una clave-valor
    localStorage.setItem('userEmail', email2local);


    // ...
  } else {
    // Eliminar una clave
    localStorage.removeItem('userEmail');
  }
});

