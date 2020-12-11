var email = document.getElementById("inputCorreo"); // FALTA ARREGLAR EL VALOR VACIO!!!
var password = document.getElementById("inputPassword");

function registro() {
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((user) => {
      // Signed in 
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });

}