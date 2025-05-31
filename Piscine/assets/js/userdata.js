fetch('../backend/get_user_info.php')
  .then(response => {
    if (!response.ok) throw new Error('Non connecté');
    return response.json();
  })
  .then(user => {
    // Pour toutes les images de profil de l'utilisateur connecté
    document.querySelectorAll('.user-photo-profil').forEach(img => {
      img.src = '../backend/uploads/' + user.photo_profil;
    });
    // Pour le nom et l'emploi si besoin
    if(document.getElementById('sidebar-nom-prenom')) {
      document.getElementById('sidebar-nom-prenom').textContent = user.prenom + ' ' + user.nom;
    }
    if(document.getElementById('sidebar-emploi')) {
      document.getElementById('sidebar-emploi').textContent = user.emploi;
    }
    if(document.getElementById('nom-prenom')) {
      document.getElementById('nom-prenom').textContent = user.prenom + ' ' + user.nom;
    }
    if(document.getElementById('emploi')) {
      document.getElementById('emploi').textContent = user.emploi;
    }
  })
  .catch(() => {
    document.querySelectorAll('.user-photo-profil').forEach(img => {
      img.src = '../assets/images/default-avatar.png'; // image par défaut si non connecté
    });
  });
