var errorCodeModal = document.getElementById("errorCodeModal");
var emailval;
var userVar = localStorage.getItem("userEmail").split("&")
function tables_adddata() {
    emailval = userVar[1];
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
          <td><a target="_blank" href="https://forms.gle/eYHoJzYYV2rtwECE8"><button class="btn btn-warning">Cambiar APPs</button></a></td>
          </tr>
          `;
        });
      });
}

function tables_updatedata(id, licenciaVar, TipoVar, Apps_usadasVar, Apps_maxVar) {
    licencia.value = licenciaVar
    Tipo.value = TipoVar
    Apps_usadas.value = Apps_usadasVar
    Apps_max.value = Apps_maxVar
    var botonGuardar = document.getElementById("botonGuardar")
    botonGuardar.innerHTML = "Editar"
    botonGuardar.onclick = function(){
        

    var itemToEdit = db.collection("user_license")
    .doc(emailval)
    .collection("userOwns")
    .doc(id)

// Set the "capital" field of the city 'DC'
return itemToEdit.update({
    Licencia: licencia.value,
    Tipo: Tipo.value,
    Apps_usadas: Apps_usadas.value,
    Apps_max: Apps_max.value,
  })
.then(function() {
    console.log("Document successfully updated!");
    botonGuardar.innerHTML = "Guardar"
    botonGuardar.onclick = tables_createdata()
})
.catch(function(error) {
    // The document probably doesn't exist.
    errorCodeModal.innerHTML = error
    $("#errorModal").modal("show")
});
}
}