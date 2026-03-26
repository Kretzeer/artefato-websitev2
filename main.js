// Artefato Empreendimentos v2

// Oculta o placeholder quando a imagem carrega com sucesso
document.querySelectorAll('.hero-image img, .projeto-image img').forEach(img => {
  const placeholder = img.nextElementSibling;
  if (!placeholder) return;

  if (img.complete && img.naturalWidth > 0) {
    placeholder.style.opacity = '0';
    placeholder.style.pointerEvents = 'none';
  } else {
    img.addEventListener('load', () => {
      placeholder.style.opacity = '0';
      placeholder.style.pointerEvents = 'none';
    });
  }
});
