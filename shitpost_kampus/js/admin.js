const db = firebase.firestore();

document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;

  db.collection('posts').add({
    title: title,
    content: content,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    alert('Post added successfully');
    document.getElementById('postForm').reset();
    loadPosts();
  }).catch((error) => {
    console.error('Error adding post: ', error);
  });
});

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