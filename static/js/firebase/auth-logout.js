function logout(GoToLogout) {
    firebase.auth().signOut().then(function() {
      window.location.replace("login/index.html?onLogin=" + GoToLogout + "&root=" + rootvar);
    }).catch(function(error) {
    });
    
  }