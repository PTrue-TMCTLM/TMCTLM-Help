var emailbox = document.getElementById("CorreoInput");
var errorCodeModal = document.getElementById("errorCodeModal");
var emailval;
function imloggedin() {}

function tables_createdata() {
  var licencia = document.getElementById("licenciaInput");
  var Tipo = document.getElementById("TipoInput");
  var Apps_usadas = document.getElementById("Apps_usadasInput");
  var Apps_max = document.getElementById("Apps_maxInput");
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
        licencia.value = "";
        Tipo.value = "";
        Apps_usadas.value = "";
        Apps_max.value = "";

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
          <td><button class="btn btn-warning">Editar</button></td>
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
