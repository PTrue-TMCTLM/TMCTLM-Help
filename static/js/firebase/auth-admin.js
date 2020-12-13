var db = firebase.firestore();
var wait = function (tiempo) {
    return {
      then: function (f) {
        setTimeout(f, tiempo);
      },
    };
  };

var email3array, email3;
email3 = localStorage.getItem("userEmail");
email3array = email3.split("&");

var account = db
  .collection("users")
  .where("EMAIL", "==", email3array[1])
  .where("UID", "==", email3array[0]);

  account.get().then(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
    console.log(
      doc.data().UID,
      " => ",
      doc.data().EMAIL,
      " - IS ADMIN = ",
      doc.data().IsAdmin)
        if (doc.data().IsAdmin != true){
        errorCodeModal.innerHTML = "Necesitas permisos para ver esto..."

        hidden.bs.modal	
        var errorModal = document.getElementById('myModal')
        errorModal.addEventListener('hidden.bs.modal', fueraInfo()
        $("#errorModal").modal("show")
    }
    })
 })
function fuera(url){
window.location.replace("login/index.html?onLogin=" + url)
}