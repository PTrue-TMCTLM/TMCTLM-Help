// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBCVBUYgvY9N1AP2RHrVC1WMawopwI_BuE",
authDomain: "tmctlm-help.firebaseapp.com",
projectId: "tmctlm-help",
storageBucket: "tmctlm-help.appspot.com",
messagingSenderId: "276187882589",
appId: "1:276187882589:web:e3de653765a5403a7559b4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var wait = function(tiempo) {
    return {
      then: function(f) {
        setTimeout(f, tiempo);
      }
    };
  };

wait(2000).then(function() {
  });

