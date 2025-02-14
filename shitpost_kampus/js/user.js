const db = firebase.firestore();

function loadPosts() {
  db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
    const posts = document.getElementById('posts');
    posts.innerHTML = '';
    snapshot.forEach((doc) => {
      const post = doc.data();
      posts.innerHTML += `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        </div>
      `;
    });
  });
}

loadPosts();