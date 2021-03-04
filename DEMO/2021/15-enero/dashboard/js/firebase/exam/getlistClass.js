var db = firebase.firestore();
  var tabla = document.getElementById("tablaDatos");

function buttonClass(){
  var tabla2 = document.getElementById("tablaOcultar");
  tabla2.className = ""
  tables_adddata()
}
function tables_adddata() {
    var clase = document.getElementById("clase").value;
    newdb = db.collection("school_data").where("loginCode", "==", clase);
    newdb.collection("libreria").onSnapshot((querySnapshot) => {
        tabla.innerHTML = "";
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().Licencia}`);
          tabla.innerHTML += `
          <tr>
          <th scope="row">${doc.id}</th>
          <td>${doc.data().asignatura}</td>
          <td>${doc.data().nombre}</td>
          <td><a href="${doc.data().pdf}" target="_blank"><button type="button" class="btn btn-light">Abrir</button></a></td>
          </tr>
          `;
        });
      });
}

 
