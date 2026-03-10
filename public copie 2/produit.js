// ====================================
// MAISON MIRAGE — JS PARTAGÉ PAGES PRODUIT
// <script src="produit.js"></script>
// ====================================

document.addEventListener('DOMContentLoaded', () => {

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
  const navBurger = document.getElementById('navBurger');
  const mobileOverlay = document.getElementById('mobile-overlay');
  if (navBurger && mobileOverlay) {
    navBurger.addEventListener('click', function() {
      this.classList.toggle('open');
      this.setAttribute('aria-expanded', this.classList.contains('open'));
      mobileOverlay.classList.toggle('open');
    });
    document.querySelectorAll('.mobile-nav-item').forEach(l => l.addEventListener('click', () => {
      navBurger.classList.remove('open');
      navBurger.setAttribute('aria-expanded', 'false');
      mobileOverlay.classList.remove('open');
    }));
  }

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

});
