var db = firebase.firestore();
  var tabla = document.getElementById("tablaDatos");

function buttonClass(){
  var tabla2 = document.getElementById("tablaOcultar");
  tables_adddata()
}
function tables_adddata() {
    var clase = document.getElementById("clase").value;
    db.collection("school_exams")
    .where("shcool_id", "==", String(clase))
    .onSnapshot((querySnapshot) => {
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

 
function onload1(){
  const valores = window.location.search;
  //Creamos la instancia
  const urlParams = new URLSearchParams(valores);

  //Verificar si existe el parámetro
  if(urlParams.has('cc')){
    var claseURL = urlParams.get('cc');
    var clase = document.getElementById("clase");
    clase.value = claseURL
    buttonClass()
  }
}