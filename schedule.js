// 공지사항 · 교육 일정 달력
// 내용은 data/schedule.json 에 있으며, 관리자 페이지(admin/)의 「공지 · 일정」 탭에서 수정합니다.
(() => {
  const box = document.getElementById('news-app');
  if (!box) return;
  const me = document.currentScript;
  const root = new URL('.', me ? me.src : location.href);
  const lang = document.documentElement.lang;
  const li = lang === 'en' ? 1 : lang === 'ja' ? 2 : 0;
  const tk = li === 1 ? 'en' : li === 2 ? 'ja' : null;
  const L = {
    notice: ['공지사항', 'Notices', 'お知らせ'],
    pinned: ['중요', 'Pinned', '重要'],
    more: ['공지 더보기', 'More notices', 'もっと見る'],
    less: ['접기', 'Show less', '閉じる'],
    cal: ['교육 · 수업 일정', 'Training & class schedule', '講習・レッスン日程'],
    upcoming: ['다가오는 일정', 'Upcoming', '今後の予定'],
    none: ['등록된 일정이 없습니다. 교육 일정은 카카오톡으로 문의해 주세요.', 'No events scheduled yet. Please ask us on KakaoTalk.', '予定はまだありません。カカオトークでお問い合わせください。'],
    noneDay: ['이 날은 일정이 없습니다.', 'No events on this day.', 'この日の予定はありません。'],
    prev: ['이전 달', 'Previous month', '前の月'],
    next: ['다음 달', 'Next month', '次の月'],
    today: ['오늘', 'Today', '今日'],
    apply: ['신청 · 문의', 'Apply / Ask', '申込・お問い合わせ'],
    link: ['자세히 보기', 'Details', '詳しく見る'],
    place: ['장소', 'Place', '場所'],
    time: ['시간', 'Time', '時間'],
  };
  const t = (k) => L[k][li];
  const WD = [['일', '월', '화', '수', '목', '금', '토'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], ['日', '月', '火', '水', '木', '金', '土']][li];
  const CAT = {
    '강사 교육': ['Teacher training', '講師養成', 'c-edu'],
    '워크숍': ['Workshop', 'ワークショップ', 'c-ws'],
    '특강': ['Special class', '特別講座', 'c-ws'],
    '수업': ['Class', 'レッスン', 'c-class'],
    '행사': ['Event', 'イベント', 'c-event'],
    '휴무': ['Closed', '休業', 'c-off'],
  };
  const catName = (c) => (li && CAT[c] ? CAT[c][li - 1] : c);
  const catCls = (c) => (CAT[c] ? CAT[c][2] : 'c-etc');
  const KAKAO = 'https://open.kakao.com/o/s1LTdccg';
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const para = (s) => esc(s).replace(/\n/g, '<br>');
  const tr = (o, k) => (tk && o[tk] && o[tk][k]) || o[k];
  const d0 = (s) => { const [y, m, d] = String(s).split('-').map(Number); return new Date(y, m - 1, d); };
  const key = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const fmt = (d) => (li === 1 ? d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' (' + WD[d.getDay()] + ')'
    : (d.getMonth() + 1) + (li === 2 ? '月' : '월 ') + d.getDate() + (li === 2 ? '日' : '일') + '(' + WD[d.getDay()] + ')');
  const range = (e) => { const s = d0(e.start), en = e.end && e.end > e.start ? d0(e.end) : null; return fmt(s) + (en ? ' ~ ' + fmt(en) : ''); };
  const monthTitle = (y, m) => (li === 1 ? new Date(y, m, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : y + (li === 2 ? '年' : '년 ') + (m + 1) + (li === 2 ? '月' : '월'));

  const render = (data) => {
    const notices = (data.notices || []).filter((n) => !n.hidden && n.title)
      .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || String(b.date).localeCompare(String(a.date)));
    const events = (data.events || []).filter((e) => !e.hidden && e.title && /^\d{4}-\d{2}-\d{2}$/.test(e.start))
      .sort((a, b) => a.start.localeCompare(b.start));
    const todayKey = key(new Date());
    const byDay = {};
    events.forEach((e) => {
      const end = e.end && e.end > e.start ? d0(e.end) : d0(e.start);
      for (let d = d0(e.start); d <= end; d.setDate(d.getDate() + 1)) (byDay[key(d)] = byDay[key(d)] || []).push(e);
    });
    const evCard = (e) => `<article class="ev ${catCls(e.category)}">
      <p class="ev-meta">${e.category ? `<span class="ev-cat">${esc(catName(e.category))}</span>` : ''}<span class="ev-date">${range(e)}</span></p>
      <h4>${esc(tr(e, 'title'))}</h4>
      ${e.time ? `<p class="ev-line"><b>${t('time')}</b> ${esc(e.time)}</p>` : ''}
      ${tr(e, 'place') ? `<p class="ev-line"><b>${t('place')}</b> ${esc(tr(e, 'place'))}</p>` : ''}
      ${tr(e, 'desc') ? `<p class="ev-desc">${para(tr(e, 'desc'))}</p>` : ''}
      ${e.category === '휴무' ? '' : `<p class="ev-links">${e.link ? `<a href="${esc(e.link)}" target="_blank" rel="noopener">${t('link')} →</a>` : ''}<a href="${KAKAO}" target="_blank" rel="noopener" class="ev-apply">${t('apply')}</a></p>`}
    </article>`;

    // 공지사항
    const nHtml = notices.length ? `<div class="notice-wrap">
      <h3 class="news-h">${t('notice')}</h3>
      <div class="notice-list">${notices.map((n, i) => `<details class="notice${n.pinned ? ' pinned' : ''}"${i >= 4 ? ' data-more hidden' : ''}${i === 0 && n.pinned ? ' open' : ''}>
        <summary>${n.pinned ? `<span class="n-pin">${t('pinned')}</span>` : ''}<span class="n-title">${esc(tr(n, 'title'))}</span><span class="n-date">${esc(String(n.date || '').replace(/-/g, '.'))}</span></summary>
        <div class="n-body">${tr(n, 'body') ? `<p>${para(tr(n, 'body'))}</p>` : ''}${n.link ? `<p><a href="${esc(n.link)}" target="_blank" rel="noopener">${t('link')} →</a></p>` : ''}</div>
      </details>`).join('')}</div>
      ${notices.length > 4 ? `<button type="button" class="news-more">${t('more')}</button>` : ''}
    </div>` : '';

    // 달력
    const now = new Date();
    let ym = [now.getFullYear(), now.getMonth()];
    box.innerHTML = nHtml + `<div class="cal-wrap">
      <h3 class="news-h">${t('cal')}</h3>
      <div class="cal">
        <div class="cal-head"><button type="button" class="cal-nav" data-d="-1" aria-label="${t('prev')}">‹</button><b class="cal-title"></b><button type="button" class="cal-nav" data-d="1" aria-label="${t('next')}">›</button></div>
        <div class="cal-grid" role="grid"></div>
      </div>
      <div class="cal-day" aria-live="polite"></div>
      <h3 class="news-h">${t('upcoming')}</h3>
      <div class="ev-list">${(() => { const up = events.filter((e) => (e.end || e.start) >= todayKey).slice(0, 6); return up.length ? up.map(evCard).join('') : `<p class="ev-none">${t('none')}</p>`; })()}</div>
    </div>`;
    const grid = box.querySelector('.cal-grid'), title = box.querySelector('.cal-title'), dayBox = box.querySelector('.cal-day');
    let sel = null;
    const showDay = (k) => {
      sel = k;
      grid.querySelectorAll('.cd').forEach((c) => c.classList.toggle('sel', c.dataset.k === k));
      const list = byDay[k] || [];
      dayBox.innerHTML = `<p class="cal-day-h">${fmt(d0(k))}</p>` + (list.length ? list.map(evCard).join('') : `<p class="ev-none">${t('noneDay')}</p>`);
    };
    const draw = () => {
      const [y, m] = ym;
      title.textContent = monthTitle(y, m);
      const start = new Date(y, m, 1 - new Date(y, m, 1).getDay());
      let h = WD.map((w, i) => `<div class="cw${i === 0 ? ' sun' : i === 6 ? ' sat' : ''}">${w}</div>`).join('');
      for (let i = 0; i < 42; i++) {
        const d = new Date(start); d.setDate(start.getDate() + i);
        if (i >= 35 && d.getMonth() !== m) break;
        const k = key(d), list = byDay[k] || [];
        h += `<button type="button" class="cd${d.getMonth() !== m ? ' out' : ''}${k === todayKey ? ' today' : ''}${list.length ? ' has' : ''}${d.getDay() === 0 ? ' sun' : d.getDay() === 6 ? ' sat' : ''}${k === sel ? ' sel' : ''}" data-k="${k}">
          <span class="cn">${d.getDate()}</span>${list.slice(0, 2).map((e) => `<span class="cev ${catCls(e.category)}">${esc(tr(e, 'title'))}</span>`).join('')}${list.length > 2 ? `<span class="cmore">+${list.length - 2}</span>` : ''}</button>`;
      }
      grid.innerHTML = h;
    };
    box.querySelectorAll('.cal-nav').forEach((b) => b.addEventListener('click', () => {
      const d = new Date(ym[0], ym[1] + Number(b.dataset.d), 1); ym = [d.getFullYear(), d.getMonth()]; draw();
    }));
    grid.addEventListener('click', (e) => { const c = e.target.closest('.cd'); if (c) showDay(c.dataset.k); });
    const mb = box.querySelector('.news-more');
    if (mb) mb.addEventListener('click', () => {
      const hid = box.querySelectorAll('.notice[data-more]');
      const open = mb.dataset.open !== '1';
      hid.forEach((n) => { n.hidden = !open; });
      mb.dataset.open = open ? '1' : ''; mb.textContent = open ? t('less') : t('more');
    });
    draw();
  };
  // 관리자에서 고친 내용이 바로 보이도록 캐시 없이 읽음
  fetch(new URL('data/schedule.json?t=' + Date.now(), root), { cache: 'no-store' })
    .then((r) => r.json())
    .then(render)
    .catch(() => render({}));
})();
