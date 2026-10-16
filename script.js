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

// 홈 화면(모바일) · 바탕화면(PC) 아이콘 추가
(function () {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if (standalone) return;
  const ua = navigator.userAgent;
  const ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  const android = /Android/.test(ua);
  const mobile = ios || android;
  const inapp = /KAKAOTALK|Instagram|FBAN|FBAV|NAVER\(inapp|Line\/|everytimeApp|DaumApps/i.test(ua);
  const lang = (document.documentElement.lang || 'ko').slice(0, 2);
  const K = {
    ko: {
      mob: '📲 홈 화면에 아이콘 추가', pc: '🖥 바탕화면에 바로가기 만들기',
      footMob: '홈 화면에 개비스튜디오 아이콘 추가', footPc: '바탕화면에 개비스튜디오 바로가기 만들기',
      title: '개비스튜디오 아이콘 추가', sub: '앱처럼 한 번에 열 수 있어요', close: '확인',
      inapp: ['오른쪽 위(또는 아래)의 <b>⋮</b> 또는 <b>공유</b> 메뉴를 누르세요.', '<b>다른 브라우저로 열기</b>(Safari · Chrome)를 고르세요.', '열린 화면에서 이 버튼을 다시 누르세요.'],
      inappNote: '카카오톡 · 인스타그램 안에서 열린 화면에서는 아이콘을 만들 수 없습니다.',
      ios: ['화면 아래(아이패드는 위)의 <b>공유 버튼 ⬆︎</b>을 누르세요.', '목록을 내려 <b>홈 화면에 추가</b>를 누르세요.', '오른쪽 위 <b>추가</b>를 누르면 끝!'],
      samsung: ['아래쪽 <b>≡ 메뉴</b>를 누르세요.', '<b>현재 페이지 추가</b> → <b>홈 화면</b>을 누르세요.'],
      android: ['오른쪽 위 <b>⋮ 메뉴</b>를 누르세요.', '<b>홈 화면에 추가</b>(또는 <b>앱 설치</b>)를 누르세요.', '<b>설치</b> 또는 <b>추가</b>를 누르면 끝!'],
      chrome: ['주소창 오른쪽 끝의 <b>설치 아이콘(⊕)</b>을 누르고 <b>설치</b>를 누르세요.', '아이콘이 없으면 오른쪽 위 <b>⋮</b> → <b>전송, 저장 및 공유</b> → <b>페이지를 앱으로 설치</b>(또는 <b>바로가기 만들기</b> · 「창으로 열기」 체크)를 누르세요.'],
      edge: ['오른쪽 위 <b>··· 메뉴</b>를 누르세요.', '<b>앱</b> → <b>이 사이트를 앱으로 설치</b>를 누르세요.', '<b>설치</b>를 누르면 끝!'],
      safari: ['맨 위 메뉴 막대의 <b>파일</b>(또는 공유 버튼)을 누르세요.', '<b>Dock에 추가</b>를 누르면 끝!'],
      other: ['주소창 왼쪽의 <b>자물쇠 🔒 아이콘</b>을 마우스로 잡으세요.', '바탕화면 빈 곳으로 <b>끌어다 놓으면</b> 바로가기가 생깁니다.'],
      pcNote: '설치하면 바탕화면 · 시작 메뉴에 개비스튜디오 아이콘이 생기고, 누르면 앱처럼 깔끔한 창으로 열립니다.',
    },
    en: {
      mob: '📲 Add to Home Screen', pc: '🖥 Add to Desktop',
      footMob: 'Add the GABBY STUDIO icon to your home screen', footPc: 'Add a GABBY STUDIO shortcut to your desktop',
      title: 'Add the GABBY STUDIO icon', sub: 'Open it in one tap, like an app', close: 'OK',
      inapp: ['Tap the <b>⋮</b> or <b>Share</b> menu at the top (or bottom) right.', 'Choose <b>Open in browser</b> (Safari · Chrome).', 'Tap this button again there.'],
      inappNote: 'Icons cannot be added from inside KakaoTalk or Instagram.',
      ios: ['Tap the <b>Share button ⬆︎</b> at the bottom (top on iPad).', 'Scroll down and tap <b>Add to Home Screen</b>.', 'Tap <b>Add</b> at the top right. Done!'],
      samsung: ['Tap the <b>≡ menu</b> at the bottom.', 'Tap <b>Add page to</b> → <b>Home screen</b>.'],
      android: ['Tap the <b>⋮ menu</b> at the top right.', 'Tap <b>Add to Home screen</b> (or <b>Install app</b>).', 'Tap <b>Install</b> or <b>Add</b>. Done!'],
      chrome: ['Click the <b>install icon (⊕)</b> at the right end of the address bar, then <b>Install</b>.', 'No icon? Open <b>⋮</b> → <b>Cast, save, and share</b> → <b>Install page as app</b> (or <b>Create shortcut</b> with “Open as window”).'],
      edge: ['Click the <b>··· menu</b> at the top right.', 'Choose <b>Apps</b> → <b>Install this site as an app</b>.', 'Click <b>Install</b>. Done!'],
      safari: ['Click <b>File</b> in the menu bar (or the Share button).', 'Choose <b>Add to Dock</b>. Done!'],
      other: ['Grab the <b>lock 🔒 icon</b> at the left of the address bar.', '<b>Drag it</b> onto your desktop to create a shortcut.'],
      pcNote: 'Once installed, the GABBY STUDIO icon appears on your desktop and Start menu and opens in its own clean window.',
    },
    ja: {
      mob: '📲 ホーム画面に追加', pc: '🖥 デスクトップに追加',
      footMob: 'ホーム画面にGABBY STUDIOのアイコンを追加', footPc: 'デスクトップにGABBY STUDIOのショートカットを作成',
      title: 'GABBY STUDIOのアイコンを追加', sub: 'アプリのようにワンタップで開けます', close: 'OK',
      inapp: ['右上（または右下）の<b>⋮</b>または<b>共有</b>メニューを押します。', '<b>ブラウザで開く</b>（Safari・Chrome）を選びます。', '開いた画面でこのボタンをもう一度押します。'],
      inappNote: 'カカオトーク・インスタグラムの中ではアイコンを追加できません。',
      ios: ['画面下（iPadは上）の<b>共有ボタン ⬆︎</b>を押します。', '下にスクロールして<b>ホーム画面に追加</b>を押します。', '右上の<b>追加</b>を押せば完了！'],
      samsung: ['下の<b>≡ メニュー</b>を押します。', '<b>ページを追加</b> → <b>ホーム画面</b>を押します。'],
      android: ['右上の<b>⋮ メニュー</b>を押します。', '<b>ホーム画面に追加</b>（または<b>アプリをインストール</b>）を押します。', '<b>インストール</b>または<b>追加</b>を押せば完了！'],
      chrome: ['アドレスバー右端の<b>インストールアイコン（⊕）</b>を押し、<b>インストール</b>を押します。', 'アイコンがない場合は<b>⋮</b> → <b>キャスト、保存、共有</b> → <b>ページをアプリとしてインストール</b>（または<b>ショートカットを作成</b>・「ウィンドウとして開く」にチェック）。'],
      edge: ['右上の<b>··· メニュー</b>を押します。', '<b>アプリ</b> → <b>このサイトをアプリとしてインストール</b>を押します。', '<b>インストール</b>を押せば完了！'],
      safari: ['メニューバーの<b>ファイル</b>（または共有ボタン）を押します。', '<b>Dockに追加</b>を押せば完了！'],
      other: ['アドレスバー左の<b>鍵 🔒 アイコン</b>をマウスでつかみます。', 'デスクトップの空いている所に<b>ドラッグ</b>するとショートカットができます。'],
      pcNote: 'インストールするとデスクトップ・スタートメニューにアイコンができ、アプリのようにすっきりしたウィンドウで開きます。',
    },
  }[lang];
  if (!K) return;
  const ICON = '/icons/icon-192.png';
  const btns = [...document.querySelectorAll('.install-hero')];
  btns.forEach((b) => { b.textContent = mobile ? K.mob : K.pc; });
  const foot = document.querySelector('.footer');
  if (foot) {
    const fb = document.createElement('button');
    fb.type = 'button'; fb.className = 'install-btn install-foot';
    fb.innerHTML = '<img src="' + ICON + '" alt="" width="34" height="34"><span></span>';
    fb.querySelector('span').textContent = mobile ? K.footMob : K.footPc;
    foot.insertBefore(fb, foot.querySelector('.copyright-warn'));
    btns.push(fb);
  }
  if (!btns.length) return;
  btns.forEach((b) => { b.hidden = false; });
  let deferred = null;
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferred = e; });
  window.addEventListener('appinstalled', () => { btns.forEach((b) => { b.hidden = true; }); });

  const g = document.createElement('div');
  g.className = 'install-guide'; g.hidden = true;
  g.setAttribute('role', 'dialog'); g.setAttribute('aria-modal', 'true');
  document.body.appendChild(g);
  const closeGuide = () => { g.hidden = true; };
  g.addEventListener('click', (e) => { if (e.target === g || e.target.closest('.ig-close')) closeGuide(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !g.hidden) closeGuide(); });
  const showGuide = () => {
    let steps, note = '';
    if (inapp) { steps = K.inapp; note = K.inappNote; }
    else if (ios) steps = K.ios;
    else if (/SamsungBrowser/.test(ua)) steps = K.samsung;
    else if (android) steps = K.android;
    else if (/Edg\//.test(ua)) { steps = K.edge; note = K.pcNote; }
    else if (/Chrome|Whale/.test(ua)) { steps = K.chrome; note = K.pcNote; }
    else if (/Safari/.test(ua) && /Macintosh/.test(ua)) { steps = K.safari; note = K.pcNote; }
    else { steps = K.other; note = K.pcNote; }
    g.innerHTML = '<div class="ig-box"><div class="ig-head"><img src="' + ICON + '" alt=""><div><b>' + K.title + '</b><small>' + K.sub + '</small></div></div><ol>'
      + steps.map((s) => '<li>' + s + '</li>').join('') + '</ol>' + (note ? '<p class="ig-note">' + note + '</p>' : '')
      + '<button type="button" class="ig-close">' + K.close + '</button></div>';
    g.hidden = false;
    g.querySelector('.ig-close').focus();
  };
  btns.forEach((b) => b.addEventListener('click', async () => {
    if (deferred) {
      const ev = deferred; deferred = null;
      ev.prompt();
      try { const r = await ev.userChoice; if (r.outcome === 'accepted') btns.forEach((x) => { x.hidden = true; }); } catch (e) { /* 무시 */ }
      return;
    }
    showGuide();
  }));
})();
