document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('open');
    });
  }

  const accordions = Array.from(document.querySelectorAll('.faq-item'));

  accordions.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    item.classList.remove('accordion-item-open');
    trigger.setAttribute('aria-expanded', 'false');
    const initialIcon = trigger.querySelector('.accordion-icon');
    if (initialIcon) {
      initialIcon.src = 'images/chevron-down-100.svg';
    }

    trigger.addEventListener('click', function () {
      const isOpen = item.classList.contains('accordion-item-open');

      accordions.forEach((other) => {
        if (other === item) return;
        other.classList.remove('accordion-item-open');
        const otherTrigger = other.querySelector('.accordion-trigger');
        if (otherTrigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
        }
        const otherIcon = other.querySelector('.accordion-icon');
        if (otherIcon) {
          otherIcon.src = 'images/chevron-down-100.svg';
        }
      });

      const icon = this.querySelector('.accordion-icon');
      if (isOpen) {
        item.classList.remove('accordion-item-open');
        if (icon) icon.src = 'images/chevron-down-100.svg';
        this.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('accordion-item-open');
        if (icon) icon.src = 'images/chevron-up-100.svg';
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
