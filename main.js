// Artefato Empreendimentos v2

// Revela imagem e oculta placeholder quando o arquivo carrega com sucesso.
// Se a imagem não existir, o placeholder (bloco de cor) permanece visível.
document.querySelectorAll('.hero-image img, .projeto-image img').forEach(img => {
  const placeholder = img.nextElementSibling;

  function onLoad() {
    img.classList.add('loaded');
    if (placeholder) placeholder.classList.add('hidden');
  }

  if (img.complete && img.naturalWidth > 0) {
    onLoad();
  } else {
    img.addEventListener('load', onLoad);
  }
});
