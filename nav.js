(function () {
  var btn = document.querySelector('.nav-hamburger');
  var links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = links.classList.toggle('open');
    btn.textContent = open ? '✕' : '☰';
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      btn.textContent = '☰';
      btn.setAttribute('aria-label', 'Open menu');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('nav')) {
      links.classList.remove('open');
      btn.textContent = '☰';
      btn.setAttribute('aria-label', 'Open menu');
    }
  });
})();
