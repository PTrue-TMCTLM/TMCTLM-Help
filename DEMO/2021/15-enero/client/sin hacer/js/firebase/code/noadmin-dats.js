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
          <th scope="row">${doc.data().Licencia}</th>
          <td>${doc.data().Tipo}</td>
          <td>${doc.data().Apps_usadas}</td>
          <td>${doc.data().Apps_max}</td>
          <td><a target="_blank" href="https://forms.gle/eYHoJzYYV2rtwECE8"><button class="btn btn-warning">Cambiar APPs</button></a></td>
          </tr>
          `;
        });
      });
}