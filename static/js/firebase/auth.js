var wait = function (tiempo) {
  return {
    then: function (f) {
      setTimeout(f, tiempo);
    },
  };
};
function generarLicencia() {
  var caracteres = "ABCDEFGHJKMNPQRTUVWXYZ2346789";
  licenciaGen = "";
  for (i = 0; i < 20; i++)
    licenciaGen += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  console.log(licenciaGen);
}

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
var root = ParseURLParametrer("root")
var email = document.getElementById("inputCorreo");
var password = document.getElementById("inputPassword");

var uid, displayName, photoURL, email2, licenciaGen;

function registro() {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((user) => {
      generarLicencia();
      db.collection("user_license")
        .doc(email.value)
        .collection("userOwns")
        .add({
          Licencia: licenciaGen,
          Tipo: "Regalo",
          Apps_usadas: "Ninguna",
          Apps_max: "1",
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      db.collection("users")
        .add({
          Email: user.email,
          IsAdmin: false,
          Uid: user.uid,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    });
}

function iniciosesion() {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((user) => {
      localStorage.setItem("userEmail", user.uid + "&" + user.email);
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
  wait(3000).then(function () {
    if (user != null) {
      email = user.email;
      uid = user.uid;
      if (typeof onLogin !== "undefined") {
        window.location.replace(root + onLogin);
      } else {
        window.location.replace(root + "/index.html");
      }
      // Crear una clave-valor
      localStorage.setItem("userEmail", uid + "&" + email);
    } else {
      localStorage.removeItem("userEmail");
    }
  });
}

