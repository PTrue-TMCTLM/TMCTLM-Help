let email3 = localStorage.getItem('userEmail');

if (email3 = "undefined") {
    window.location.replace("login/index.html?onLogin=licenses.html"); 
}

var db = firebase.firestore();
var docRef = db.collection("user_license").doc(email3array[1]);
// Ontener el valor de una clave
var email3array = email3.split("&")
console.log(email3array);
console.log("0-- " + email3array[0])
console.log("1-- " + email3array[1])




// Valid options for source are 'server', 'cache', or
// 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
// for more information.
var getOptions = {
    source: 'default'
};

// Get a document, forcing the SDK to fetch from the offline cache.
docRef.get(getOptions).then(function(doc) {
    // Document was found in the cache. If no cached document exists,
    // an error will be returned to the 'catch' block below.
    console.log("Cached document data:", doc.data());
}).catch(function(error) {
    console.log("Error getting cached document:", error);
});



