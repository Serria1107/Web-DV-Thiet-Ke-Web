// [MAIN] Nền tảng: menu mobile, accessibility và navigation cơ bản.
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Mở menu');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Mở menu');
    }
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const note = contactForm.querySelector('.form-note');

    const requiredFields = ['name', 'email', 'service', 'message'];
    const hasEmptyField = requiredFields.some((fieldName) => !String(formData.get(fieldName) || '').trim());

    if (hasEmptyField) {
      if (note) {
        note.textContent = 'Vui lòng điền đầy đủ các trường bắt buộc để xem demo form.';
        note.style.color = '#fbbf24';
      }
      return;
    }

    if (note) {
      note.textContent = 'Demo frontend đã nhận thông tin. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.';
      note.style.color = '#34d399';
    }

    contactForm.reset();
  });
}
