/**
 * SmileCare Dental Website - Client-Side Controller
 * Vanilla JS replacement for React, Framer Motion, and Embla Carousel
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ================= 1. THEME TOGGLE (DARK MODE) =================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');

  // Check initial state
  const isDarkMode = localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);


  // ================= 2. LOADING SCREEN =================
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loader-bar');

  if (loader && loaderBar) {
    // Animate progress bar to 100%
    setTimeout(() => {
      loaderBar.style.width = '100%';
    }, 50);

    // Hide loader after loading finishes
    setTimeout(() => {
      loader.classList.add('opacity-0');
      loader.classList.add('scale-105');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 700);
    }, 1800);
  }


  // ================= 3. SCROLL REVEAL ANIMATIONS =================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // ================= 4. HEADER SCROLL STYLING =================
  const header = document.getElementById('main-header');
  
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.remove('bg-transparent', 'py-4');
      header.classList.add('bg-white/90', 'dark:bg-navy/90', 'backdrop-blur-xl', 'shadow-lg', 'shadow-navy/5', 'py-2');
    } else {
      header.classList.remove('bg-white/90', 'dark:bg-navy/90', 'backdrop-blur-xl', 'shadow-lg', 'shadow-navy/5', 'py-2');
      header.classList.add('bg-transparent', 'py-4');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run once on load


  // ================= 5. MOBILE DRAWER NAVIGATION =================
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLine1 = document.getElementById('menu-line-1');
  const menuLine2 = document.getElementById('menu-line-2');
  const menuLine3 = document.getElementById('menu-line-3');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('translate-x-full');
    
    // Toggle hamburger icon animation
    if (mobileMenu.classList.contains('translate-x-full')) {
      menuLine1.style.transform = 'none';
      menuLine2.style.opacity = '1';
      menuLine3.style.transform = 'none';
    } else {
      menuLine1.style.transform = 'rotate(45deg) translate(5px, 6px)';
      menuLine2.style.opacity = '0';
      menuLine3.style.transform = 'rotate(-45deg) translate(5px, -6px)';
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Close menu when clicking link
      if (!mobileMenu.classList.contains('translate-x-full')) {
        toggleMobileMenu();
      }
    });
  });


  // ================= 6. MOBILE STICKY CONTACT BAR =================
  const stickyContact = document.getElementById('sticky-contact');
  const heroSection = document.getElementById('hero');

  if (stickyContact && heroSection) {
    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        stickyContact.classList.add('translate-y-full');
        stickyContact.classList.remove('translate-y-0');
      } else {
        stickyContact.classList.remove('translate-y-full');
        stickyContact.classList.add('translate-y-0');
      }
    }, {
      threshold: 0
    });

    heroObserver.observe(heroSection);
  }


  // ================= 7. BEFORE & AFTER COMPARE SLIDERS =================
  const sliders = document.querySelectorAll('.before-after-slider');

  sliders.forEach(slider => {
    const input = slider.querySelector('.slider-input');
    const beforeImg = slider.querySelector('.before-img-container');
    const handle = slider.querySelector('.slider-handle');

    if (input && beforeImg && handle) {
      input.addEventListener('input', (e) => {
        const val = e.target.value;
        beforeImg.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
        handle.style.left = `${val}%`;
      });
    }
  });


  // ================= 8. TESTIMONIALS CAROUSEL SLIDER =================
  const carousel = document.getElementById('reviews-carousel');
  const dots = document.querySelectorAll('.carousel-dot');
  let autoplayInterval;
  let currentSlide = 0;
  const slideCount = dots.length;

  function updateCarouselDots(index) {
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('w-8', 'bg-teal-400');
        dot.classList.remove('w-2', 'bg-white/30');
      } else {
        dot.classList.remove('w-8', 'bg-teal-400');
        dot.classList.add('w-2', 'bg-white/30');
      }
    });
    currentSlide = index;
  }

  function getSlideScrollLeft(index) {
    if (!carousel) return 0;
    const slides = carousel.querySelectorAll('.snap-slide');
    if (slides.length === 0) return 0;
    
    // Find slide or slide offset
    const targetSlide = slides[index];
    return targetSlide.offsetLeft - carousel.offsetLeft;
  }

  function goToSlide(index) {
    if (carousel) {
      const scrollLeft = getSlideScrollLeft(index);
      carousel.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
      updateCarouselDots(index);
    }
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIdx = parseInt(dot.getAttribute('data-slide'));
      goToSlide(slideIdx);
      resetAutoplay();
    });
  });

  // Track manual scrolling to update dots
  if (carousel) {
    let scrollTimeout;
    carousel.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = carousel.scrollLeft;
        const width = carousel.clientWidth;
        const slides = carousel.querySelectorAll('.snap-slide');
        
        let nearestIndex = 0;
        let minDiff = Infinity;
        
        slides.forEach((slide, idx) => {
          const diff = Math.abs((slide.offsetLeft - carousel.offsetLeft) - scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            nearestIndex = idx;
          }
        });
        
        updateCarouselDots(nearestIndex);
      }, 100);
    });
  }

  // Autoplay functionality
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      let nextSlide = (currentSlide + 1) % slideCount;
      goToSlide(nextSlide);
    }, 4500);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    // Start it initially
    startAutoplay();
  }


  // ================= 9. FAQ ACCORDIONS =================
  const faqButtons = document.querySelectorAll('.faq-btn');

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Toggle state
      btn.setAttribute('aria-expanded', !isExpanded);
      
      if (!isExpanded) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        if (icon) icon.classList.add('rotate-180');
      } else {
        content.classList.remove('open');
        content.style.maxHeight = '0px';
        if (icon) icon.classList.remove('rotate-180');
      }

      // Optional: Collapse other items
      faqButtons.forEach(otherBtn => {
        if (otherBtn !== btn && otherBtn.getAttribute('aria-expanded') === 'true') {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherContent = otherBtn.nextElementSibling;
          const otherIcon = otherBtn.querySelector('.faq-icon');
          otherContent.classList.remove('open');
          otherContent.style.maxHeight = '0px';
          if (otherIcon) otherIcon.classList.remove('rotate-180');
        }
      });
    });
  });

  // Setup initial scroll height for the open item
  const initialOpenContent = document.querySelector('.accordion-content.open');
  if (initialOpenContent) {
    initialOpenContent.style.maxHeight = initialOpenContent.scrollHeight + 'px';
  }


  // ================= 10. CLINIC GALLERY LIGHTBOX =================
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (galleryItems.length > 0 && lightbox && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const src = item.getAttribute('data-src');
        const alt = item.getAttribute('data-alt');
        
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        
        // Show Lightbox
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
      });
    });

    const closeLightbox = () => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', closeLightbox);
    lightboxImg.addEventListener('click', (e) => e.stopPropagation());
  }


  // ================= 11. APPOINTMENT BOOKING FORM =================
  const bookingForm = document.getElementById('appointment-form');
  const bookingSuccess = document.getElementById('booking-success');
  const bookAnotherBtn = document.getElementById('book-another');
  const submitText = document.getElementById('submit-text');
  const submitSpinner = document.getElementById('submit-spinner');
  const whatsappCta = document.getElementById('booking-whatsapp');

  if (bookingForm && bookingSuccess) {
    
    // Set date input min value to today dynamically
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
      dateInput.min = new Date().toISOString().split('T')[0];
    }

    // Direct WhatsApp messaging trigger helper
    function getWhatsAppUrl() {
      const name = document.getElementById('booking-name').value;
      const phone = document.getElementById('booking-phone').value;
      const treatment = document.getElementById('booking-treatment').value;
      const date = document.getElementById('booking-date').value;
      
      const baseText = `Hello SmileCare Dental! I'd like to book an appointment.\nName: ${name}\nPhone: ${phone}\nTreatment: ${treatment}\nPreferred Date: ${date}`;
      return `https://wa.me/919876543210?text=${encodeURIComponent(baseText)}`;
    }

    if (whatsappCta) {
      whatsappCta.addEventListener('click', (e) => {
        const name = document.getElementById('booking-name').value;
        const phone = document.getElementById('booking-phone').value;
        const treatment = document.getElementById('booking-treatment').value;
        const date = document.getElementById('booking-date').value;

        if (!name || !phone || !treatment || !date) {
          alert('Please fill out the Name, Phone, Treatment, and Date fields before choosing WhatsApp.');
          e.preventDefault();
        } else {
          whatsappCta.href = getWhatsAppUrl();
        }
      });
    }

    bookingForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Loading State
      if (submitText) submitText.textContent = 'Booking...';
      if (submitSpinner) submitSpinner.classList.remove('hidden');
      
      // Simulate API loading
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Toggle views
      bookingForm.classList.add('hidden');
      bookingSuccess.classList.remove('hidden');
      
      // Reset loading state
      if (submitText) submitText.textContent = 'Book Appointment';
      if (submitSpinner) submitSpinner.classList.add('hidden');
    });

    if (bookAnotherBtn) {
      bookAnotherBtn.addEventListener('click', () => {
        bookingForm.reset();
        bookingSuccess.classList.add('hidden');
        bookingForm.classList.remove('hidden');
      });
    }
  }


  // ================= 12. FLOATING WHATSAPP TOOLTIP =================
  const whatsappFloat = document.getElementById('whatsapp-float');
  const whatsappTooltip = document.getElementById('whatsapp-tooltip');

  if (whatsappFloat && whatsappTooltip) {
    whatsappFloat.addEventListener('mouseenter', () => {
      whatsappTooltip.classList.remove('opacity-0', 'scale-95', 'translate-y-2');
      whatsappTooltip.classList.add('opacity-100', 'scale-100', 'translate-y-0');
    });
    
    whatsappFloat.addEventListener('mouseleave', () => {
      whatsappTooltip.classList.add('opacity-0', 'scale-95', 'translate-y-2');
      whatsappTooltip.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
    });
  }
});
