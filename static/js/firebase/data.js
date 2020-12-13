var emailbox = document.getElementById("CorreoInput");
var errorCodeModal = document.getElementById("errorCodeModal");
var emailval;
var licencia = document.getElementById("licenciaInput");
var Tipo = document.getElementById("TipoInput");
var Apps_usadas = document.getElementById("Apps_usadasInput");
var Apps_max = document.getElementById("Apps_maxInput");

function tables_createdata() {

  if (
    licencia.value != "" &&
    Tipo.value != "" &&
    Apps_usadas.value != "" &&
    Apps_max.value != ""
  ) {
    db.collection("user_license")
      .doc(CorreoInput.value)
      .collection("userOwns")
      .add({
        Licencia: licencia.value,
        Tipo: Tipo.value,
        Apps_usadas: Apps_usadas.value,
        Apps_max: Apps_max.value,
      })
      .then(function (docref) {
        licencia.value = ""
        Tipo.value = ""
        Apps_usadas.value = ""
        Apps_max.value = ""

        console.log("Documento grabado con id: " + docref.id);
      })
      .catch(function (error) {
        errorCodeModal.innerHTML = error;
        $("#errorModal").modal("show");
        console.error("Error añadiendo documento: " + error);
      });
  } else {
    errorCodeModal.innerHTML = "Se deben de rellenar TODOS LOS CAMPOS";
    $("#errorModal").modal("show");
  }
}
function tables_adddata() {
  if (emailbox.value != "") {
    emailval = emailbox.value;
    var tabla = document.getElementById("licencias");
    db.collection("user_license")
      .doc(emailval)
      .collection("userOwns")
      .onSnapshot((querySnapshot) => {
        tabla.innerHTML = "";
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().Licencia}`);
          tabla.innerHTML += `
          <tr>
          <th scope="row">${doc.id}</th>
          <td>${doc.data().Licencia}</td>
          <td>${doc.data().Tipo}</td>
          <td>${doc.data().Apps_usadas}</td>
          <td>${doc.data().Apps_max}</td>
          <td><button class="btn btn-warning" onclick='tables_updatedata("${doc.id}", "${doc.data().Licencia}", "${doc.data().Tipo}", "${doc.data().Apps_usadas}", "${doc.data().Apps_max}" )'>Editar</button></td>
          <td><button class="btn btn-danger" onclick='tables_deleteData("${
            doc.id
          }")'>Eliminar</button></td>
          </tr>
          `;
        });
      });
  } else {
    errorCodeModal.innerHTML = "Se debe de rellenar el campo Correo"
    $("#errorModal").modal("show");
  }
}
function tables_deleteData(id) {

  db.collection("user_license")
    .doc(emailval)
    .collection("userOwns")
    .doc(id)
    .delete()
    .then(function() {
      console.log("Eliminado")
    })
    .catch(function(error) {
      errorCodeModal.innerHTML = error
      $("#errorModal").modal("show")
    })
}
var itemToUpdateID
function tables_updatedata(id, licenciaVar, TipoVar, Apps_usadasVar, Apps_maxVar) {
  itemToUpdateID = id
    licencia.value = licenciaVar
    Tipo.value = TipoVar
    Apps_usadas.value = Apps_usadasVar
    Apps_max.value = Apps_maxVar
    var botonGuardar = document.getElementById("botonGuardar")
    botonGuardar.innerHTML = "Editar"
    botonGuardar.className = "btn btn-warning"
    botonGuardar.setAttribute("onclick", "onBtnUpdateClick()");
}
function onBtnUpdateClick(){
        

  var itemToEdit = db.collection("user_license")
  .doc(emailval)
  .collection("userOwns")
  .doc(itemToUpdateID)

// Set the "capital" field of the city 'DC'
itemToEdit.update({
  Licencia: licencia.value,
  Tipo: Tipo.value,
  Apps_usadas: Apps_usadas.value,
  Apps_max: Apps_max.value,
})
.then(function() {
  console.log("Document successfully updated!");
  botonGuardar.innerHTML = "Guardar"
  botonGuardar.setAttribute("onclick", "tables_createdata()"); 
  botonGuardar.className = "btn btn-primary"
  licencia.value = ""
  Tipo.value = ""
  Apps_usadas.value = ""
  Apps_max.value = ""
})
.catch(function(error) {
  // The document probably doesn't exist.
  errorCodeModal.innerHTML = error
  $("#errorModal").modal("show")
});
}