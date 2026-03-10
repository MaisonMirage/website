// ====================================
// MAISON MIRAGE — JS PARTAGÉ PAGES PRODUIT
// À lier dans chaque page produit :
// <script src="produit.js"></script>
// ====================================

// Galerie d'images — switch entre les vues
document.querySelectorAll('.product-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    const mainImg = document.getElementById('mainImg');
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = thumb.dataset.src;
      mainImg.alt = thumb.dataset.alt;
      mainImg.style.opacity = '1';
    }, 200);
  });
});

// Navbar burger menu
document.getElementById('navBurger').addEventListener('click', function() {
  this.classList.toggle('open');
  const isOpen = this.classList.contains('open');
  this.setAttribute('aria-expanded', isOpen);
  document.getElementById('mobile-overlay').classList.toggle('open');
});
document.querySelectorAll('.mobile-nav-item').forEach(l => l.addEventListener('click', () => {
  document.getElementById('navBurger').classList.remove('open');
  document.getElementById('navBurger').setAttribute('aria-expanded', 'false');
  document.getElementById('mobile-overlay').classList.remove('open');
}));

// Navbar scroll effect
const waitGSAP = setInterval(() => {
  if (window.gsap && window.ScrollTrigger) {
    clearInterval(waitGSAP);
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      start: 'top -60',
      onEnter: () => document.getElementById('navbar').classList.add('scrolled'),
      onLeaveBack: () => document.getElementById('navbar').classList.remove('scrolled')
    });
  }
}, 50);
