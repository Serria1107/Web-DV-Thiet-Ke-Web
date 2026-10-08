// [MEMBER-34][REQ-3] SCROLL REVELATION – AOS
// [MEMBER-34][REQ-4] MICRO-INTERACTIONS – CTA FEEDBACK

const member34State = {
  initialized: false,
  aosLoadPromise: null,
};

const applyAosHooks = () => {
  const selectors = [
    '#services .section-heading',
    '#services .service-card',
    '#process .process-step',
    '#pricing .section-heading',
    '#pricing .pricing-card',
    '#why-us .feature-item',
    '#why-us .testimonial-box',
    '#contact .contact-copy',
    '#contact .contact-form',
    '#portfolio .section-heading',
    '#portfolio .portfolio-grid',
  ];

  selectors.forEach((selector) => {
    const items = document.querySelectorAll(selector);

    items.forEach((element, index) => {
      if (!element.hasAttribute('data-aos')) {
        element.setAttribute('data-aos', 'fade-up');
      }

      if (selector.includes('.service-card') || selector.includes('.process-step') || selector.includes('.pricing-card') || selector.includes('.feature-item') || selector.includes('.testimonial-box') || selector.includes('.contact-copy') || selector.includes('.contact-form')) {
        const delay = Math.min(index * 120, 240);
        element.setAttribute('data-aos-delay', String(delay));
      }
    });
  });
};

const loadAos = () => {
  if (typeof window.AOS !== 'undefined') {
    return Promise.resolve(window.AOS);
  }

  if (member34State.aosLoadPromise) {
    return member34State.aosLoadPromise;
  }

  const styles = document.createElement('link');
  styles.rel = 'stylesheet';
  styles.href = 'https://unpkg.com/aos@2.3.4/dist/aos.css';
  styles.crossOrigin = 'anonymous';
  document.head.appendChild(styles);

  member34State.aosLoadPromise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => resolve(window.AOS || null);
    script.onerror = () => {
      console.warn('[MEMBER-34] AOS failed to load. Scroll reveal will fall back to the default layout.');
      resolve(null);
    };
    document.body.appendChild(script);
  });

  return member34State.aosLoadPromise;
};

const initializeMember34 = async () => {
  if (member34State.initialized || !document.body) {
    return;
  }

  member34State.initialized = true;
  applyAosHooks();

  if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  await loadAos();

  if (typeof window.AOS !== 'undefined') {
    window.AOS.init({
      duration: 700,
      offset: 100,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }
};

document.addEventListener('DOMContentLoaded', initializeMember34);
