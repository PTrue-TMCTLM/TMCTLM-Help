var db = firebase.firestore();
  var tabla = document.getElementById("tablaDatos");
function tables_adddata() {
    db.collection("examenes")
      .onSnapshot((querySnapshot) => {
        tabla.innerHTML = "";
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().Licencia}`);
          tabla.innerHTML += `
          <tr>
          <th scope="row">${doc.id}</th>
          <td>${doc.data().asignatura}</td>
          <td>${doc.data().nombre}</td>
          <td><a href="https://tmctlm-static-files.netlify.app/tmctlm-Help/libreria/PDF${doc.data().pdf}" target="_blank"><button type="button" class="btn btn-light">Abrir</button></a></td>
          </tr>
          `;
        });
      });
}

 
