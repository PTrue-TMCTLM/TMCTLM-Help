var email = document.getElementById("inputCorreo").value; // FALTA ARREGLAR EL VALOR VACIO!!!
var password = document.getElementById("inputPassword").value;

function registro() {
console.log(email)
console.log(password)
  firebase.auth().createUserWithEmailAndPassword(email, password)
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