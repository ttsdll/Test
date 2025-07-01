const marker = document.querySelector('#marker-300sl');
const overlay = document.getElementById('info-overlay');
const collectBtn = document.getElementById('collect-btn');

marker.addEventListener('markerFound', () => {
  overlay.classList.remove('hidden');
});

collectBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
});
