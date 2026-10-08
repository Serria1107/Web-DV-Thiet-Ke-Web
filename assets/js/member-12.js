// [MEMBER-12][REQ-1] TODO: Intro animation for header and hero should be implemented in feature/intro-portfolio.
// [MEMBER-12][REQ-2] TODO: Interactive portfolio card / hover / flip states should be implemented in feature/intro-portfolio.

const prepareIntroHooks = () => {
  if (!document.body) return;
  document.body.classList.add('js-setup-ready');
};

document.addEventListener('DOMContentLoaded', prepareIntroHooks);
