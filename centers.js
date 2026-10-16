// 자이로토닉® 교육 센터 목록 (외부 센터 참고 정보)
// 센터 내용은 data/centers.json 에 있으며, 관리자 페이지(admin/)에서 수정합니다.
// lessons / gyrokinesis: true = 운영 확인, null = 확인 중

// 과정 · 기구 용어 (긴 것부터 치환): [한국어, 영어, 일본어]
const CENTER_TERMS = [
  ['스페셜 머신 과정', 'Special Equipment courses', 'スペシャルマシンコース'],
  ['유방암 적용 과정', 'Breast cancer application course', '乳がん適用コース'],
  ['댄서 적용 과정', 'Course for dancers', 'ダンサー向けコース'],
  ['점핑 스트레칭 보드', 'Jumping-Stretching Board', 'ジャンピング・ストレッチングボード'],
  ['레그 익스텐션', 'Leg Extension', 'レッグエクステンション'],
  ['자이로키네시스', 'GYROKINESIS®', 'ジャイロキネシス®'],
  ['자이로토너', 'GYROTONER®', 'ジャイロトナー®'],
  ['자이로토닉', 'GYROTONIC®', 'ジャイロトニック®'],
  ['프리트레이닝', 'Pre-Training', 'プレトレーニング'],
  ['파운데이션', 'Foundation', 'ファンデーション'],
  ['어프렌티스', 'Apprentice', 'アプレンティス'],
  ['최종 인증', 'Final Certification', '最終認定'],
  ['업데이트', 'Update', 'アップデート'],
  ['에센셜', 'Essentials', 'エッセンシャル'],
  ['아치웨이', 'Archway', 'アーチウェイ'],
  ['레벨', 'Level ', 'レベル'],
  ['리뷰', 'Review', 'レビュー'],
  ['프리', 'Pre-Training', 'プレトレーニング'],
  ['과정', 'courses', 'コース'],
];

(() => {
  const list = document.getElementById('center-list');
  if (!list) return;
  const me = document.currentScript;
  const root = new URL('.', me ? me.src : location.href);
  const lang = document.documentElement.lang;
  const li = lang === 'en' ? 1 : lang === 'ja' ? 2 : 0;
  const L = {
    lessons: ['개인레슨', 'Private lessons', '個人レッスン'],
    gk: ['자이로키네시스', 'GYROKINESIS®', 'ジャイロキネシス®'],
    special: ['스페셜 머신', 'Special equipment', 'スペシャルマシン'],
    training: ['강사 교육', 'Teacher training', '講師養成'],
    pending: ['상세 주소 확인 중', 'address being confirmed', '詳細住所確認中'],
    noaddr: ['주소 확인 중', 'Address being confirmed', '住所確認中'],
    map: ['지도', 'Map', '地図'],
    web: ['홈페이지', 'Website', 'ウェブサイト'],
    insta: ['인스타그램', 'Instagram', 'Instagram'],
  };
  const t = (k) => L[k][li];
  const term = (s) => (li ? CENTER_TERMS.reduce((acc, row) => acc.split(row[0]).join(row[li]), s) : s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const tag = (label, on) => `<span class="${on ? 'on' : ''}">${label}</span>`;
  const render = (centers) => { list.innerHTML = centers.map((c) => {
    const tr = li ? c[li === 1 ? 'en' : 'ja'] || {} : {};
    const name = tr.name || c.name;
    const area = tr.area || c.area;
    const note = (li && tr.note) || c.note;
    c.special = c.special || []; c.training = c.training || [];
    const mapUrl = `https://map.naver.com/p/search/${encodeURIComponent(c.address || c.name)}`;
    const detail = [
      c.special.length ? `<strong>${t('special')}</strong> ${c.special.map((x) => esc(term(x))).join(', ')}` : '',
      c.training.length ? `<strong>${t('training')}</strong> ${c.training.map((x) => esc(term(x))).join(' / ')}` : '',
    ].filter(Boolean).join('<br>');
    return `<article class="center">
      <div class="center-head"><h3>${esc(name)}</h3><span class="center-area">${esc(area || '')}</span></div>
      <div class="center-tags">
        ${tag(t('lessons'), c.lessons)}${tag(t('gk'), c.gyrokinesis)}${tag(t('special'), c.special.length)}${tag(t('training'), c.training.length)}
      </div>
      ${detail ? `<p class="center-detail">${detail}</p>` : ''}
      ${note ? `<p class="center-detail">${esc(note)}</p>` : ''}
      <p class="center-detail">📍 ${esc(c.address || (area ? area + ' (' + t('pending') + ')' : t('noaddr')))}</p>
      <div class="center-links">
        <a href="${mapUrl}" target="_blank" rel="noopener">${t('map')}</a>
        ${c.website ? `<a href="${esc(c.website)}" target="_blank" rel="noopener">${t('web')}</a>` : ''}
        ${c.instagram ? `<a href="https://www.instagram.com/${esc(c.instagram)}/" target="_blank" rel="noopener">${t('insta')}</a>` : ''}
      </div>
    </article>`;
  }).join(''); };
  // 관리자에서 고친 내용이 바로 보이도록 캐시 없이 읽음
  fetch(new URL('data/centers.json?t=' + Date.now(), root), { cache: 'no-store' })
    .then((r) => r.json())
    .then((j) => render((j.centers || []).filter((c) => !c.hidden)))
    .catch(() => { list.innerHTML = ''; });
})();
