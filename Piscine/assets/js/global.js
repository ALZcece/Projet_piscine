function handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();

    if (query.includes('réseau')) {
        window.location.href = 'reseau.html';
    } else if (query.includes('profil')) {
        window.location.href = 'profil.html';
    } else if (query.includes('notifications')) {
        window.location.href = 'notifications.html';
    } else if (query.includes('messagerie')) {
        window.location.href = 'messagerie.html';
    } else if (query.includes('emplois')) {
        window.location.href = 'emplois.html';
    } else {
        alert('Aucun résultat trouvé pour votre recherche.');
    }
}

function handlePost(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const text = document.getElementById('post-text').value;
    const imageInput = document.getElementById('post-image');
    const postsContainer = document.getElementById('posts-container');

    // Crée un conteneur pour la nouvelle publication
    const post = document.createElement('div');
    post.classList.add('publication');
    post.style.marginTop = '20px';

    // Ajoute le texte de la publication
    if (text) {
        const postText = document.createElement('p');
        postText.textContent = text;
        post.appendChild(postText);
    }

    // Ajoute l'image de la publication si elle est sélectionnée
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const postImage = document.createElement('img');
            postImage.src = e.target.result;
            postImage.style.maxWidth = '100%';
            postImage.style.marginTop = '10px';
            post.appendChild(postImage);
        };
        reader.readAsDataURL(imageInput.files[0]);
    }

    // Ajoute la publication au conteneur
    postsContainer.appendChild(post);

    // Réinitialise le formulaire
    document.getElementById('post-form').reset();
}