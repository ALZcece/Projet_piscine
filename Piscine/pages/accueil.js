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
