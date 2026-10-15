// 자이로토닉® 교육 센터 목록 (외부 센터 참고 정보)
// 출처: gyrotonic.com 공식 스튜디오 · 교육 일정 등록 정보 + 각 센터 홈페이지 (2026-10-14 기준)
// lessons / gyrokinesis: true = 운영 확인, null = 확인 중
window.GYRO_CENTERS = [
  { name: '서울자이로토닉협회', area: '서울 서초구', address: '서울 서초구 남부순환로325길 9, DS홀 4층 401호', lessons: true, gyrokinesis: true, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 프리트레이닝 · 파운데이션', '자이로키네시스 최종 인증', '레벨1·2 · 업데이트 · 스페셜 머신 과정'], website: 'http://www.gyrotonicseoul.co.kr', instagram: null, note: '2005년 국내 최초 본사 승인 교육센터' },
  { name: '자이로토닉 인스파인 부산', area: '부산 동래구', address: '부산 동래구 충렬대로 103, 8층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 파운데이션 · 레벨2', '자이로키네시스 파운데이션 · 어프렌티스 · 최종 인증', '점핑 스트레칭 보드 · 레그 익스텐션 · 자이로토너 과정'], website: 'http://www.gyrotonicinspine.com', instagram: null },
  { name: '자이로토닉 채움', area: '대전 서구 둔산동', address: '대전 서구 둔산로123번길 21, 3층', lessons: true, gyrokinesis: null, special: ['점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 프리 · 파운데이션 · 어프렌티스 · 레벨2', '자이로키네시스 파운데이션', '점핑 스트레칭 보드 · 자이로토너 과정'], website: 'https://www.gyrotonicchaeum.com/', instagram: 'gyrotonic_chaeum' },
  { name: '자이로토닉 재미', area: '서울 서초구 양재동', address: '서울 서초구 강남대로10길 37, 영덕빌딩 3층', lessons: true, gyrokinesis: true, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 프리 · 어프렌티스 · 레벨2', '자이로키네시스 파운데이션', '자이로토너 과정', '유방암 적용 과정'], website: 'https://www.gyrotonicjaemi.com', instagram: 'gyrotonic_jaemi' },
  { name: '아치앤컬', area: '서울 강남구', address: '서울 강남구 봉은사로 302, SK리더스뷰 205·206호', lessons: true, gyrokinesis: true, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 파운데이션 · 최종 인증', '아치웨이 레벨2', '레그 익스텐션 과정', '자이로키네시스 레벨2'], website: 'http://www.archncurledu.com/', instagram: 'archncurl_chungdam' },
  { name: '자이로토닉 코드', area: '서울 강남구 신사 · 청담', address: '서울 강남구 도산대로55길 25, 3층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로키네시스 파운데이션 · 어프렌티스 · 레벨2', '아치웨이 레벨2', '댄서 적용 과정'], website: null, instagram: 'gyrotonicchord' },
  { name: '자이로토닉 서래', area: '서울 서초구 서래마을', address: '서울 서초구 사평대로26길 40, 3층', lessons: true, gyrokinesis: true, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 프리트레이닝', '자이로키네시스 파운데이션'], website: 'http://www.gyrotonicseorae.com/', instagram: 'gyrotonic_seorae' },
  { name: '자이로토닉 애니핏', area: '서울 마포구', address: '서울 마포구 동막로 231, 우원빌딩 6층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 파운데이션', '자이로키네시스 파운데이션 · 에센셜'], website: null, instagram: 'anyfitgyrotonic' },
  { name: '자이로토닉 마브 한남', area: '서울 용산구 한남동', address: '서울 용산구 독서당로 94, 3층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 파운데이션 · 어프렌티스', '자이로키네시스 파운데이션', '점핑 스트레칭 보드 · 자이로토너 과정'], website: null, instagram: 'mauve_hannam' },
  { name: '자이로토닉 담', area: '제주 제주시', address: '제주 제주시 원노형남2길 45-1, 2층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션'], training: ['자이로토닉 프리트레이닝'], website: null, instagram: 'gyrotonic_dam' },
  { name: '자이로토닉 트라이브', area: '서울 성북구 혜화', address: '서울 성북구 혜화로 88, 1층', lessons: true, gyrokinesis: true, special: ['점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로키네시스 어프렌티스 리뷰'], website: 'https://fascia.co.kr/', instagram: 'gyrotonic_tribe' },
  { name: '자이로토닉 에코', area: '서울 성동구 성수동', address: '서울 성동구 성수일로1길 3, 6층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 최종 인증', '자이로키네시스 최종 인증', '유방암 적용 과정'], website: null, instagram: null, note: '공식 등록 주소 기준 · 청담 · 삼성 · 송도 지점 운영' },
  { name: '자이로토닉 에코 천안', area: '충남 천안시 서북구 불당동', address: '천안시 서북구 불당25로, 2층', lessons: true, gyrokinesis: null, special: ['점핑 스트레칭 보드', '레그 익스텐션'], training: [], website: null, instagram: null },
  { name: '아트필라테스 청담 본점', area: '서울 강남구 청담동', address: '서울 강남구 도산대로 454, 청담휴먼스타빌 3층', lessons: true, gyrokinesis: null, special: ['점핑 스트레칭 보드'], training: ['자이로토닉 파운데이션 · 어프렌티스'], website: null, instagram: null },
  { name: '뉴트럴 스튜디오', area: '경기 화성시 동탄', address: '경기 화성시 동탄공원로 36, 3층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드'], training: [], website: null, instagram: null },
  { name: '자이로토닉 아이디얼바디', area: '경기 수원시 권선구', address: '경기 수원시 권선구 권선로720번길 41, 1층', lessons: true, gyrokinesis: null, special: ['레그 익스텐션'], training: ['점핑 스트레칭 보드 · 레그 익스텐션 과정'], website: null, instagram: null },
  { name: '자이로토닉 청담', area: '서울 강남구 청담동', address: '서울 강남구 학동로101길 33, 3층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: [], website: null, instagram: 'gyrotonic_cheongdam_official' },
  { name: '아든 필라테스', area: '부산 남구', address: '부산 남구 진남로127번길 8', lessons: null, gyrokinesis: null, special: [], training: [], website: null, instagram: null },
  { name: '후스파인', area: '전북 전주', address: null, lessons: null, gyrokinesis: null, special: [], training: [], website: null, instagram: null },
  { name: '자이로토닉 플리에', area: '서울 광진구', address: null, lessons: null, gyrokinesis: null, special: [], training: [], website: null, instagram: null },
  { name: '자이로토닉 누크', area: '제주', address: null, lessons: null, gyrokinesis: null, special: [], training: [], website: null, instagram: null },
  { name: '제이앤에스 바디플로우', area: '서울 종로구', address: '서울 종로구 이화장길 54, 2층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 프리 · 파운데이션 · 어프렌티스 · 최종 인증', '자이로키네시스 프리 · 파운데이션 · 어프렌티스 · 최종 인증', '스페셜 머신 과정'], website: null, instagram: 'jns_sunmi.shim' },
  { name: '더 스파이럴', area: '경기 성남시 분당', address: null, lessons: null, gyrokinesis: null, special: [], training: ['프리트레이닝'], website: 'https://www.thespiralbundang.com/', instagram: null },
  { name: '스튜디오 디파인', area: null, address: null, lessons: null, gyrokinesis: true, special: [], training: ['프리트레이닝 · 파운데이션 · 어프렌티스 · 최종 인증'], website: 'http://www.studio-define.com/', instagram: null },
];

// 영어 · 일본어 페이지용 번역: [영문 이름, 영문 지역, 일본어 이름, 일본어 지역]
const CENTER_I18N = {
  '서울자이로토닉협회': ['GYROTONIC® Seoul Association', 'Seocho-gu, Seoul', 'ソウル・ジャイロトニック協会', 'ソウル 瑞草区'],
  '자이로토닉 인스파인 부산': ['GYROTONIC® InSpine Busan', 'Dongnae-gu, Busan', 'ジャイロトニック インスパイン釜山', '釜山 東莱区'],
  '자이로토닉 채움': ['GYROTONIC® Chaeum', 'Dunsan-dong, Seo-gu, Daejeon', 'ジャイロトニック チェウム', '大田 西区 屯山洞'],
  '자이로토닉 재미': ['GYROTONIC® Jaemi', 'Yangjae-dong, Seocho-gu, Seoul', 'ジャイロトニック ジェミ', 'ソウル 瑞草区 良才洞'],
  '아치앤컬': ['Arch n Curl', 'Gangnam-gu, Seoul', 'アーチ・アンド・カール', 'ソウル 江南区'],
  '자이로토닉 코드': ['GYROTONIC® Chord', 'Sinsa · Cheongdam, Gangnam-gu, Seoul', 'ジャイロトニック コード', 'ソウル 江南区 新沙・清潭'],
  '자이로토닉 서래': ['GYROTONIC® Seorae', 'Seorae Village, Seocho-gu, Seoul', 'ジャイロトニック ソレ', 'ソウル 瑞草区 西来村'],
  '자이로토닉 애니핏': ['GYROTONIC® Anyfit', 'Mapo-gu, Seoul', 'ジャイロトニック エニーフィット', 'ソウル 麻浦区'],
  '자이로토닉 마브 한남': ['GYROTONIC® Mauve Hannam', 'Hannam-dong, Yongsan-gu, Seoul', 'ジャイロトニック モーブ漢南', 'ソウル 龍山区 漢南洞'],
  '자이로토닉 담': ['GYROTONIC® Dam', 'Jeju City, Jeju', 'ジャイロトニック ダム', '済州 済州市'],
  '자이로토닉 트라이브': ['GYROTONIC® Tribe', 'Hyehwa, Seongbuk-gu, Seoul', 'ジャイロトニック トライブ', 'ソウル 城北区 恵化'],
  '자이로토닉 에코': ['GYROTONIC® Echo', 'Seongsu-dong, Seongdong-gu, Seoul', 'ジャイロトニック エコー', 'ソウル 城東区 聖水洞'],
  '자이로토닉 에코 천안': ['GYROTONIC® Echo Cheonan', 'Buldang-dong, Seobuk-gu, Cheonan', 'ジャイロトニック エコー天安', '天安市 西北区 プルダン洞'],
  '아트필라테스 청담 본점': ['Art Pilates Cheongdam', 'Cheongdam-dong, Gangnam-gu, Seoul', 'アートピラティス清潭 本店', 'ソウル 江南区 清潭洞'],
  '뉴트럴 스튜디오': ['Neutral Studio', 'Dongtan, Hwaseong, Gyeonggi', 'ニュートラルスタジオ', '京畿道 華城市 東灘'],
  '자이로토닉 아이디얼바디': ['GYROTONIC® Ideal Body', 'Gwonseon-gu, Suwon, Gyeonggi', 'ジャイロトニック アイディアルボディ', '京畿道 水原市 勧善区'],
  '자이로토닉 청담': ['GYROTONIC® Cheongdam', 'Cheongdam-dong, Gangnam-gu, Seoul', 'ジャイロトニック清潭', 'ソウル 江南区 清潭洞'],
  '아든 필라테스': ['Arden Pilates', 'Nam-gu, Busan', 'アーデン・ピラティス', '釜山 南区'],
  '후스파인': ['Hoospine', 'Jeonju, Jeonbuk', 'フースパイン', '全北 全州'],
  '자이로토닉 플리에': ['GYROTONIC® Plié', 'Gwangjin-gu, Seoul', 'ジャイロトニック プリエ', 'ソウル 広津区'],
  '자이로토닉 누크': ['GYROTONIC® Nook', 'Jeju', 'ジャイロトニック ヌーク', '済州'],
  '제이앤에스 바디플로우': ['J&S Body Flow', 'Jongno-gu, Seoul', 'J&S ボディフロー', 'ソウル 鍾路区'],
  '더 스파이럴': ['The Spiral', 'Bundang, Seongnam, Gyeonggi', 'ザ・スパイラル', '京畿道 城南市 盆唐'],
  '스튜디오 디파인': ['Studio Define', null, 'スタジオ・ディファイン', null],
};
const NOTE_I18N = {
  '2005년 국내 최초 본사 승인 교육센터': ['Korea’s first HQ-approved education center (2005)', '2005年、韓国初の本部公認教育センター'],
  '공식 등록 주소 기준 · 청담 · 삼성 · 송도 지점 운영': ['Official listed address · branches in Cheongdam, Samseong and Songdo', '公式登録住所 · 清潭・三成・松島にも支店'],
};
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
  list.innerHTML = window.GYRO_CENTERS.map((c) => {
    const tr = li ? CENTER_I18N[c.name] : null;
    const name = tr ? tr[(li - 1) * 2] : c.name;
    const area = tr ? tr[(li - 1) * 2 + 1] : c.area;
    const note = c.note && li && NOTE_I18N[c.note] ? NOTE_I18N[c.note][li - 1] : c.note;
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
  }).join('');
})();
