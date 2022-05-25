document.getElementById('result-title').style.display = 'none';
document.getElementById('token').style.display = 'none';
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      authResult.user.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        document.getElementById('result-title').style.display = "";
        document.getElementById('token').style.display = "";
        document.getElementById('token').textContent = idToken;
        console.log(idToken);
      }).catch(function (error) {
        console.log(error);
      });
      return true;
    },
    uiShown: function () {
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  // signInSuccessUrl: 'success.html',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
};
ui.start('#firebaseui-auth-container', uiConfig);

