// [MEMBER-34][REQ-3] TODO: AOS initialization should be handled in feature/scroll-micro.
// [MEMBER-34][REQ-4] TODO: Micro-interactions for CTA buttons should be implemented in feature/scroll-micro.

const setupMember34Hooks = () => {
  document.querySelectorAll('[data-aos]').forEach((element) => {
    element.setAttribute('data-aos-ready', 'true');
  });
};

document.addEventListener('DOMContentLoaded', setupMember34Hooks);
