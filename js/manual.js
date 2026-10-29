/* CHIIK · manual de uso: índice que sigue la lectura, WhatsApp con mensaje y año. */
(function () {
  const MSG = '¡Hola! Leí el manual de CHIIK y me gustaría saber más para nuestra granja.';
  document.querySelectorAll('[data-wa]').forEach((a) => { a.href = 'https://wa.me/50258253416?text=' + encodeURIComponent(MSG); });

  const hdr = document.querySelector('.hdr');
  addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 8), { passive: true });

  // El índice marca la sección que se está leyendo
  const enlaces = [...document.querySelectorAll('.toc a')];
  const secciones = enlaces.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const marcar = () => {
    let actual = secciones[0];
    secciones.forEach((s) => { if (s.getBoundingClientRect().top < 140) actual = s; });
    enlaces.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + actual.id));
  };
  let raf = 0;
  addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(marcar); }, { passive: true });
  marcar();

  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
