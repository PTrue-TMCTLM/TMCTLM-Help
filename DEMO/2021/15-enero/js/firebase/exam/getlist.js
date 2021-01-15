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
          <td>Abrir</td>
          </tr>
          `;
        });
      });
}

 
