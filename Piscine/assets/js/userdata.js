fetch('../backend/get_user_info.php')
  .then(response => {
    if (!response.ok) throw new Error('Non connecté');
    return response.json();
  })
  .then(user => {
    document.getElementById('sidebar-photo-profil').src = '../backend/uploads/' + user.photo_profil;
    document.getElementById('sidebar-nom-prenom').textContent = user.prenom + ' ' + user.nom;
    document.getElementById('sidebar-emploi').textContent = user.emploi;
    // Pour le nom et l'emploi si besoin
    if(document.getElementById('nom-prenom')) {
      document.getElementById('nom-prenom').textContent = user.prenom + ' ' + user.nom;
    }
    if(document.getElementById('emploi')) {
      document.getElementById('emploi').textContent = user.emploi;
    }
  })
  .catch(() => {
    document.querySelector('.profile-summary').innerHTML = '<p>Veuillez vous connecter.</p>';
  });
