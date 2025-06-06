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

// ----- MODALE DÉTAIL OFFRE EMPLOI -----
function showOfferDetail(event) {
    const offreId = event.target.getAttribute('data-offre');
    let titre = '';
    let description = '';
    if (offreId === '1') {
        titre = "Chargé de mobilisation - Tous Bénévoles";
        description = "Localisation : Nanterre (Île-de-France)<br>Type : Bénévolat<br><strong>Chaîne de l'Espoir</strong><br><br>Mission : Mobiliser des bénévoles pour des actions solidaires, organiser des événements, sensibiliser le public.";
    } else if (offreId === '2') {
        titre = "Stage Ingénieur d'Affaires - HEDON";
        description = "Localisation : Région Île-de-France<br>Durée : 6 mois<br><strong>HEDON Technologies</strong><br><br>Mission : Prospection commerciale, gestion de portefeuille clients, accompagnement des projets d'ingénierie.";
    } else if (offreId === '3') {
        titre = "Stage Thermique - Stellantis";
        description = "Localisation : Poissy (On-site)<br>Durée : 6 mois<br><strong>Stellantis</strong><br><br>Mission : Études thermiques sur véhicules, analyse de performance, participation à l'innovation technique.";
    }
    document.getElementById('modal-offre-titre').textContent = titre;
    document.getElementById('modal-offre-description').innerHTML = description;
    document.getElementById('offer-modal').style.display = 'block';
}

function closeOfferModal() {
    document.getElementById('offer-modal').style.display = 'none';
}
