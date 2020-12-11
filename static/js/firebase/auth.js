function ParseURLParametrer(Parametrer){
  var FullURL = window.location.search.substring(1);
  var ParametresArray = FullURL.split("&");
  for (var i = 0; i < ParametresArray.length; i++) {
    var CurrentParametrer = ParametresArray[i].split('=');
    if (CurrentParametrer[0] == Parametrer){
      return CurrentParametrer[1]
    }
  }
}
var onLogin = ParseURLParametrer('onLogin')
var email = document.getElementById("inputCorreo");
var password = document.getElementById("inputPassword");

var uid, displayName, photoURL, email2;

function registro() {
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((user) => {
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
    if (typeof onLogin == "undefined"){
    window.location.replace('../index.html');
  } else {
    window.location.replace("../" + onLogin)
  }
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

