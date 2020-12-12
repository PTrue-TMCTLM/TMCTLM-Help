function imloggedin(){
    
}

function tables_adddata() {
  var tabla = document.getElementById("licencias");
  db.collection("user_license")
    .doc(email3array[1])
    .collection("userOwns")
    .get()
    .then((querySnapshot) => {
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
        </tr>
          `;
      });
    });
}