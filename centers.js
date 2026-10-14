// 자이로토닉® 교육 센터 목록 (외부 센터 참고 정보)
// 출처: gyrotonic.com 공식 스튜디오 · 교육 일정 등록 정보 + 각 센터 홈페이지 (2026-10-14 기준)
// lessons / gyrokinesis: true = 운영 확인, null = 확인 중
window.GYRO_CENTERS = [
  { name: '서울자이로토닉협회', area: '서울 서초구', address: '서울 서초구 남부순환로325길 9, DS홀 4층 401호', lessons: true, gyrokinesis: true, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 프리트레이닝 · 파운데이션', '자이로키네시스 최종 인증', '레벨1·2 · 업데이트 · 스페셜 머신 과정'], website: 'http://www.gyrotonicseoul.co.kr', instagram: null, note: '2005년 국내 최초 본사 승인 교육센터' },
  { name: '제이앤에스 바디플로우', area: '서울 종로구', address: '서울 종로구 이화장길 54, 2층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 프리 · 파운데이션 · 어프렌티스 · 최종 인증', '자이로키네시스 프리 · 파운데이션 · 어프렌티스 · 최종 인증', '스페셜 머신 과정'], website: null, instagram: 'jns_sunmi.shim' },
  { name: '자이로토닉 인스파인 부산', area: '부산 동래구', address: '부산 동래구 충렬대로 103, 8층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 파운데이션 · 레벨2', '자이로키네시스 파운데이션 · 어프렌티스 · 최종 인증', '점핑 스트레칭 보드 · 레그 익스텐션 · 자이로토너 과정'], website: 'http://www.gyrotonicinspine.com', instagram: null },
  { name: '자이로토닉 채움', area: '대전 서구 둔산동', address: '대전 서구 둔산로123번길 21, 3층', lessons: true, gyrokinesis: null, special: ['점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 프리 · 파운데이션 · 어프렌티스 · 레벨2', '자이로키네시스 파운데이션', '점핑 스트레칭 보드 · 자이로토너 과정'], website: 'https://www.gyrotonicchaeum.com/', instagram: 'gyrotonic_chaeum' },
  { name: '자이로토닉 재미', area: '서울 서초구 양재동', address: '서울 서초구 강남대로10길 37, 영덕빌딩 3층', lessons: true, gyrokinesis: true, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 프리 · 어프렌티스 · 레벨2', '자이로키네시스 파운데이션', '자이로토너 과정', '유방암 적용 과정'], website: 'https://www.gyrotonicjaemi.com', instagram: 'gyrotonic_jaemi' },
  { name: '아치앤컬', area: '서울 강남구', address: '서울 강남구 봉은사로 302, SK리더스뷰 205·206호', lessons: true, gyrokinesis: true, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 파운데이션 · 최종 인증', '아치웨이 레벨2', '레그 익스텐션 과정', '자이로키네시스 레벨2'], website: 'http://www.archncurledu.com/', instagram: 'archncurl_chungdam' },
  { name: '자이로토닉 코드', area: '서울 강남구 신사 · 청담', address: '서울 강남구 도산대로55길 25, 3층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로키네시스 파운데이션 · 어프렌티스 · 레벨2', '아치웨이 레벨2', '댄서 적용 과정'], website: null, instagram: 'gyrotonicchord' },
  { name: '자이로토닉 서래', area: '서울 서초구 서래마을', address: '서울 서초구 사평대로26길 40, 3층', lessons: true, gyrokinesis: true, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 프리트레이닝', '자이로키네시스 파운데이션'], website: 'http://www.gyrotonicseorae.com/', instagram: 'gyrotonic_seorae' },
  { name: '자이로토닉 애니핏', area: '서울 마포구', address: '서울 마포구 동막로 231, 우원빌딩 6층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 파운데이션', '자이로키네시스 파운데이션 · 에센셜'], website: null, instagram: 'anyfitgyrotonic' },
  { name: '자이로토닉 한남', area: '서울 용산구 한남동', address: '서울 용산구 독서당로 94, 3층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 파운데이션 · 어프렌티스', '자이로키네시스 파운데이션', '점핑 스트레칭 보드 · 자이로토너 과정'], website: null, instagram: 'mauve_hannam' },
  { name: '자이로토닉 트라이브', area: '서울 성북구 혜화', address: '서울 성북구 혜화로 88, 1층', lessons: true, gyrokinesis: true, special: ['점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로키네시스 어프렌티스 리뷰'], website: 'https://fascia.co.kr/', instagram: 'gyrotonic_tribe' },
  { name: '자이로토닉 에코', area: '서울 성동구 성수동', address: '서울 성동구 성수일로1길 3, 6층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: ['자이로토닉 최종 인증', '자이로키네시스 최종 인증', '유방암 적용 과정'], website: null, instagram: null, note: '공식 등록 주소 기준 · 청담 · 삼성 · 송도 지점 운영' },
  { name: '자이로토닉 에코 천안', area: '충남 천안시 서북구 불당동', address: '천안시 서북구 불당25로, 2층', lessons: true, gyrokinesis: null, special: ['점핑 스트레칭 보드', '레그 익스텐션'], training: [], website: null, instagram: null },
  { name: '아트필라테스 청담 본점', area: '서울 강남구 청담동', address: '서울 강남구 도산대로 454, 청담휴먼스타빌 3층', lessons: true, gyrokinesis: null, special: ['점핑 스트레칭 보드'], training: ['자이로토닉 파운데이션 · 어프렌티스'], website: null, instagram: null },
  { name: '자이로토닉 아이디얼바디', area: '경기 수원시 권선구', address: '경기 수원시 권선구 권선로720번길 41, 1층', lessons: true, gyrokinesis: null, special: ['레그 익스텐션'], training: ['점핑 스트레칭 보드 · 레그 익스텐션 과정'], website: null, instagram: null },
  { name: '자이로토닉 청담', area: '서울 강남구 청담동', address: '서울 강남구 학동로101길 33, 3층', lessons: true, gyrokinesis: null, special: ['아치웨이', '점핑 스트레칭 보드', '레그 익스텐션', '자이로토너'], training: [], website: null, instagram: 'gyrotonic_cheongdam_official' },
  { name: '더 스파이럴', area: '경기 성남시 분당', address: null, lessons: null, gyrokinesis: null, special: [], training: ['프리트레이닝'], website: 'https://www.thespiralbundang.com/', instagram: null },
  { name: '스튜디오 디파인', area: null, address: null, lessons: null, gyrokinesis: true, special: [], training: ['프리트레이닝 · 파운데이션 · 어프렌티스 · 최종 인증'], website: 'http://www.studio-define.com/', instagram: null },
];

(() => {
  const list = document.getElementById('center-list');
  if (!list) return;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const tag = (label, on) => `<span class="${on ? 'on' : ''}">${label}</span>`;
  list.innerHTML = window.GYRO_CENTERS.map((c) => {
    const mapUrl = `https://map.naver.com/p/search/${encodeURIComponent(c.address || c.name)}`;
    const detail = [
      c.special.length ? `<strong>스페셜 머신</strong> ${c.special.map(esc).join(', ')}` : '',
      c.training.length ? `<strong>강사 교육</strong> ${c.training.map(esc).join(' / ')}` : '',
    ].filter(Boolean).join('<br>');
    return `<article class="center">
      <div class="center-head"><h3>${esc(c.name)}</h3><span class="center-area">${esc(c.area || '')}</span></div>
      <div class="center-tags">
        ${tag('개인레슨', c.lessons)}${tag('자이로키네시스', c.gyrokinesis)}${tag('스페셜 머신', c.special.length)}${tag('강사 교육', c.training.length)}
      </div>
      ${detail ? `<p class="center-detail">${detail}</p>` : ''}
      ${c.note ? `<p class="center-detail">${esc(c.note)}</p>` : ''}
      <p class="center-detail">📍 ${esc(c.address || (c.area ? c.area + ' (상세 주소 확인 중)' : '주소 확인 중'))}</p>
      <div class="center-links">
        <a href="${mapUrl}" target="_blank" rel="noopener">지도</a>
        ${c.website ? `<a href="${esc(c.website)}" target="_blank" rel="noopener">홈페이지</a>` : ''}
        ${c.instagram ? `<a href="https://www.instagram.com/${esc(c.instagram)}/" target="_blank" rel="noopener">인스타그램</a>` : ''}
      </div>
    </article>`;
  }).join('');
})();
