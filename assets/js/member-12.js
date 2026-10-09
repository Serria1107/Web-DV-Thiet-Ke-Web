const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const activateIntroAnimation = () => {
  if (!document.body) return;
  document.body.classList.add('js-setup-ready');

  if (reduceMotionQuery.matches) {
    document.body.classList.add('js-intro-ready');
    return;
  }

  window.setTimeout(() => {
    document.body.classList.add('js-intro-ready');
  }, 120);
};

const setupPortfolioInteraction = () => {
  const portfolioCards = document.querySelectorAll('.js-portfolio-card');

  portfolioCards.forEach((card) => {
    const toggleCard = (event) => {
      if (event && event.target && event.target.closest('a')) {
        return;
      }

      const isActive = card.classList.toggle('is-active');

      if (isActive) {
        portfolioCards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.classList.remove('is-active');
          }
        });
      }
    };

    card.addEventListener('click', toggleCard);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCard(event);
      }
    });
  });
};

const prepareIntroHooks = () => {
  activateIntroAnimation();
  setupPortfolioInteraction();
};

document.addEventListener('DOMContentLoaded', prepareIntroHooks);
