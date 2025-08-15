function abrirLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function fecharLightbox() {
  document.getElementById("lightbox").style.display = "none";
}