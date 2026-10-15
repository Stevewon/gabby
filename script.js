// 관리자에서 바꾼 사진이 캐시와 상관없이 바로 보이도록, 사진마다 최신 버전 번호를 붙임
(() => {
  const me = document.currentScript;
  const root = new URL('.', me ? me.src : location.href);
  fetch(new URL('images/versions.json?t=' + Date.now(), root), { cache: 'no-store' })
    .then((r) => (r.ok ? r.json() : {}))
    .then((v) => {
      const fresh = (f) => (v[f] ? new URL('images/' + f + '?v=' + v[f], root).href : null);
      document.querySelectorAll('img[src*="images/"]').forEach((img) => {
        const u = fresh(img.getAttribute('src').split('images/').pop().split('?')[0]);
        if (u) img.src = u;
      });
      [['--img-hero', 'hero.jpg'], ['--img-story', 'story-hero.jpg'], ['--img-equip', 'equip-pilates.jpg']].forEach(([k, f]) => {
        const u = fresh(f);
        if (u) document.documentElement.style.setProperty(k, 'url("' + u + '")');
      });
    })
    .catch(() => {});
})();

(() => {
  const header = document.querySelector('.header');
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');
  const sticky = document.querySelector('.sticky-cta');
  const hero = document.querySelector('.hero');

  // Mobile menu
  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    const labels = { en: ['Close menu', 'Open menu'], ja: ['メニューを閉じる', 'メニューを開く'] }[document.documentElement.lang] || ['메뉴 닫기', '메뉴 열기'];
    menuBtn.setAttribute('aria-label', open ? labels[0] : labels[1]);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Header border + sticky CTA after hero
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
    sticky.classList.toggle('show', window.scrollY > hero.offsetHeight * 0.6);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('in'));
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
