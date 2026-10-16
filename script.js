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

// 기구 공식 동영상 (GYROTONIC® 공식 유튜브) 팝업
(function () {
  const btns = document.querySelectorAll('.video-btn[data-yt]');
  if (!btns.length) return;
  const lang = (document.documentElement.lang || 'ko').slice(0, 2);
  const T = {
    ko: ['닫기', 'GYROTONIC® 공식 영상 · ', '유튜브에서 보기'],
    en: ['Close', 'Official GYROTONIC® video · ', 'Watch on YouTube'],
    ja: ['閉じる', 'GYROTONIC® 公式動画 · ', 'YouTubeで見る'],
  }[lang] || ['닫기', 'GYROTONIC® 공식 영상 · ', '유튜브에서 보기'];
  const m = document.createElement('div');
  m.className = 'video-modal'; m.hidden = true;
  m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true');
  m.innerHTML = '<div class="vm-box"><button type="button" class="vm-close" aria-label="' + T[0] + '">×</button><div class="vm-frame"></div><p class="vm-src">' + T[1] + '<a target="_blank" rel="noopener">' + T[2] + '</a></p></div>';
  document.body.appendChild(m);
  const frame = m.querySelector('.vm-frame'), link = m.querySelector('.vm-src a'), closeBtn = m.querySelector('.vm-close');
  let last = null;
  const close = () => { m.hidden = true; frame.innerHTML = ''; document.body.style.overflow = ''; if (last) last.focus(); };
  btns.forEach((b) => b.addEventListener('click', () => {
    const id = b.dataset.yt; last = b;
    frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1" title="' + (b.title || 'video') + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    link.href = 'https://www.youtube.com/watch?v=' + id;
    m.hidden = false; document.body.style.overflow = 'hidden'; closeBtn.focus();
  }));
  closeBtn.addEventListener('click', close);
  m.addEventListener('click', (e) => { if (e.target === m) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !m.hidden) close(); });
})();
