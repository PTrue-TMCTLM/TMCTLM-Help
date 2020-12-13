var db = firebase.firestore();
var wait = function (tiempo) {
  return {
    then: function (f) {
      setTimeout(f, tiempo);
    },
  };
};
console.log("SERVICE ADMIN OK");
var account = db
.collection("users")
.where("Email", "==", email3array[1])
.where("Uid", "==", email3array[0]);
var email3array, email3, GotoWebsite;
email3 = localStorage.getItem("userEmail");
email3array = email3.split("&");
var errorModal = document.getElementById("errorModal");
var errorCodeModal = document.getElementById("errorCodeModal");
function noAuth(web) {
  window.location.replace("../login/index.html?onLogin=" + web + "&root=../");
}
function admload(url){
    onload2();
    waiter(url, "../");
    
}
function onload2(){
  
account.get().then(function (querySnapshot) {
  console.log("111")
    querySnapshot.forEach(function (doc) {
        console.log(
        doc.data().Uid +
        " => ",
        doc.data().Email +
        " - IS ADMIN = " +
        doc.data().IsAdmin)
      if ((doc.data().IsAdmin == false) || (doc.data().IsAdmin == undefined)) {
        document.getElementById("errorCodeModal").innerHTML = "Necesitas permisos para ver esto...";

        console.log(doc.data().IsAdmin + " then i executed modal" )


        $('#errorModal').on('hidden.bs.modal', function (e) {
          noAuth(GotoWebsite)
        })
        $("#errorModal").modal("show");
        
      } else if(doc.data().IsAdmin != true) {
        console.log("Hi admin");
        alert("HI");
      }


      
  });
  });
}
function OnlyADM(website) {
  GotoWebsite = website

  
}
