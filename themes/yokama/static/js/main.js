/**
 * Yokama Heilpraktiker Website
 * Main JavaScript
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '60px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.flexDirection = 'column';
      navLinks.style.backgroundColor = '#ffffff';
      navLinks.style.padding = '16px';
      navLinks.style.gap = '16px';
      navLinks.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      navLinks.style.zIndex = '99';
    });

    // Close menu when link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.style.display = 'none';
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animate stats on scroll
  const stats = document.querySelectorAll('.stat-number');
  const animateStats = () => {
    stats.forEach(stat => {
      if (isInViewport(stat) && !stat.classList.contains('animated')) {
        animateNumber(stat);
        stat.classList.add('animated');
      }
    });
  };

  window.addEventListener('scroll', animateStats);
  animateStats(); // Check on load

  // Simple intersection observer fallback
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Animate number counter
  function animateNumber(element) {
    const target = parseInt(element.textContent);
    const duration = 1000; // 1 second
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + '+';
        clearInterval(counter);
      } else {
        element.textContent = Math.floor(current) + '+';
      }
    }, 16);
  }
});

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
