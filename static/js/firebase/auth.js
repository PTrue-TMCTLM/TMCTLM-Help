var wait = function (tiempo) {
  return {
    then: function (f) {
      setTimeout(f, tiempo);
    },
  };
};
var db = firebase.firestore();
function ParseURLParametrer(Parametrer) {
  var FullURL = window.location.search.substring(1);
  var ParametresArray = FullURL.split("&");
  for (var i = 0; i < ParametresArray.length; i++) {
    var CurrentParametrer = ParametresArray[i].split("=");
    if (CurrentParametrer[0] == Parametrer) {
      return CurrentParametrer[1];
    }
  }
}
var onLogin = ParseURLParametrer("onLogin");
var email = document.getElementById("inputCorreo");
var password = document.getElementById("inputPassword");

var uid, displayName, photoURL, email2;

function registro() {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((user) => {})
    db.collection("user_license")
    .doc(email.value)
    .collection("userOwns")
    .add()
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

function iniciosesion() {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((user) => {
      localStorage.setItem("userEmail", user.uid + "&" + user.email);
      alert(localStorage.getItem("userEmail"));
      whenislogged(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

function whenislogged(user) {
  var user = firebase.auth().currentUser;
  var email, uid;


  localStorage.setItem("userEmail", uid + "&" + email);
  wait(3000).then(function() {


  if (user != null) {
    email = user.email;
    uid = user.uid;
    if (typeof onLogin !== "undefined") {
      window.location.replace("../" + onLogin);
    } else {
      window.location.replace("../index.html");
    }
    // Crear una clave-valor
    localStorage.setItem("userEmail", uid + "&" + email);
  } else {
    localStorage.removeItem("userEmail");
  }
});
}
