document.querySelectorAll('.club').forEach(club => {
  club.addEventListener('click', () => {
    const isActive = club.classList.contains('active');

    // Reset all
    document.querySelectorAll('.club').forEach(c => {
      c.classList.remove('active');
      c.style.background = 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))';
      c.style.color = 'white';
    });

    // Activate this
    if (!isActive) {
      club.classList.add('active');
      const color = club.getAttribute('data-color');
      club.style.background = `linear-gradient(135deg, ${color}, rgba(255,255,255,0.15))`;
      club.style.color = '#fff';
    }
  });
});
