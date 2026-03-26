// Artefato Empreendimentos v2

// Revela imagem e oculta placeholder quando o arquivo carrega com sucesso.
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

// Contato — sincroniza campos com textarea e abre WhatsApp
(function () {
  const btn      = document.getElementById('btn-wpp');
  const inpNome  = document.getElementById('inp-nome');
  const inpMun   = document.getElementById('inp-municipio');
  const textarea = document.getElementById('form-msg');

  if (!btn) return;

  function syncTextarea() {
    const nome = inpNome.value.trim() || 'Nome';
    const mun  = inpMun.value.trim()  || 'Município';
    textarea.value =
`Olá, Artefato.
Nome: ${nome}
Município: ${mun}

Tenho interesse em conversar sobre um projeto.

Aguardo retorno.`;
  }

  [inpNome, inpMun].forEach(inp => inp.addEventListener('input', syncTextarea));

  btn.addEventListener('click', () => {
    const text = textarea.value.trim();
    const url  = `https://wa.me/5547992120175?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();
