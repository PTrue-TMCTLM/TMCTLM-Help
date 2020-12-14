function logout(GoToLogout, root2, root) {
  firebase.auth().signOut().then(function() {
    window.location.replace(root2 + "/login/index.html?onLogin=" + GoToLogout + "&root=" + root);
  }).catch(function(error) {
  });
  
}