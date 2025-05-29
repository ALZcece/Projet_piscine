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
    event.preventDefault();

    const text = document.getElementById('post-text').value;
    const imageInput = document.getElementById('post-image');
    const postsContainer = document.getElementById('posts-container');

    const postCard = document.createElement('div');
    postCard.classList.add('card');

    const content = document.createElement('p');
    content.textContent = text;
    postCard.appendChild(content);

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const postImage = document.createElement('img');
            postImage.src = e.target.result;
            postImage.style.maxWidth = '100%';
            postImage.style.marginTop = '10px';
            postCard.appendChild(postImage);
        };
        reader.readAsDataURL(imageInput.files[0]);
    }

    postsContainer.prepend(postCard);
    document.getElementById('post-form').reset();
}

// ----- MODALE DE PUBLICATION -----

function openModal() {
    document.getElementById("post-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("post-modal").style.display = "none";
}

function submitModalPost() {
    const text = document.getElementById('modal-text').value;
    const imageInput = document.getElementById('modal-image');
    const postsContainer = document.getElementById('posts-container');

    const postCard = document.createElement('div');
    postCard.classList.add('card');

    const content = document.createElement('p');
    content.textContent = text;
    postCard.appendChild(content);

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const postImage = document.createElement('img');
            postImage.src = e.target.result;
            postImage.style.maxWidth = '100%';
            postImage.style.marginTop = '10px';
            postCard.appendChild(postImage);
        };
        reader.readAsDataURL(imageInput.files[0]);
    }

    postsContainer.prepend(postCard);

    // Reset et fermer la modale
    document.getElementById('modal-text').value = '';
    document.getElementById('modal-image').value = '';
    closeModal();
}
