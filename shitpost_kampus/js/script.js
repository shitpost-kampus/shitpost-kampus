// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPaMo_CR7jIRrrxEcdVzFqGZTNcoOgUBA",
    authDomain: "shitpost-kampus.firebaseapp.com",
    projectId: "shitpost-kampus",
    storageBucket: "shitpost-kampus.firebasestorage.app",
    messagingSenderId: "111359769561",
    appId: "1:111359769561:web:a73a975674cbb7d04537c8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Redirect based on user role
        const user = userCredential.user;
        if (email === 'admin@example.com') {
          window.location.href = 'admin.html';
        } else {
          window.location.href = 'user.html';
        }
      })
      .catch((error) => {
        alert('Invalid email or password');
        console.error('Error signing in: ', error);
      });
  });