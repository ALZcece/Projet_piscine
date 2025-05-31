document.getElementById('generate-cv-btn').addEventListener('click', function() {
    fetch('../assets/cv.xml')
      .then(response => response.text())
      .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(data => {
        // Formations
        const formations = data.querySelectorAll('formation');
        let html = '<h4>Formations</h4><ul>';
        formations.forEach(f => {
          html += `<li><strong>${f.getAttribute('annee')}</strong> : ${f.querySelector('titre').textContent} - ${f.querySelector('lieu').textContent}</li>`;
        });
        html += '</ul>';
        // Projets
        const projets = data.querySelectorAll('projet');
        html += '<h4>Projets</h4><ul>';
        projets.forEach(p => {
          html += `<li><strong>${p.getAttribute('annee')}</strong> : ${p.querySelector('titre').textContent} - ${p.querySelector('description').textContent}</li>`;
        });
        html += '</ul>';
        document.getElementById('cv-content').innerHTML = html;
      });
});
