// 해외 참고 사이트 (외부 링크)
// 출처: gyrotonic.com 공식 스튜디오 목록 · 코스 파인더 (2026-10-14 기준, 교육 일정이 많은 센터 위주)
window.GYRO_REFS = [
  { name: 'GYROTONIC® International', kind: '공식', place: '미국 · 국제 본부', url: 'https://www.gyrotonic.com/', desc: '자이로토닉 · 자이로키네시스 공식 본부 사이트' },
  { name: '창시자 줄리우 호바스', kind: '자료', place: '공식', url: 'https://www.gyrotonic.com/about/juliu-horvath/', desc: '창시자의 생애와 메소드의 탄생 이야기' },
  { name: 'GYROKINESIS® 메소드 소개', kind: '자료', place: '공식', url: 'https://www.gyrotonic.com/about/gyrokinesis-method/', desc: '기구 없이 하는 자이로키네시스 공식 설명' },
  { name: '공식 코스 파인더', kind: '공식', place: '전 세계', url: 'https://www.gyrotonic.com/teacher-training/course-finder/', desc: '국가 · 과정별 공식 지도자 교육 일정 검색' },
  { name: '공식 스튜디오 찾기', kind: '공식', place: '전 세계', url: 'https://www.gyrotonic.com/studios/', desc: '전 세계 공인 자이로토닉 스튜디오 검색' },
  { name: '공식 YouTube', kind: '자료', place: '공식', url: 'https://www.youtube.com/user/GyrotonicHQVideos/', desc: '본부 공식 영상 채널, 메소드 시연 영상' },
  { name: '공식 Instagram @gyrotonic', kind: '공식', place: '미국 · SNS', url: 'https://www.instagram.com/gyrotonic/', desc: '본부 공식 인스타그램, 최신 소식' },
  { name: 'GYROTONIC® Frankfurt Center', kind: '교육센터', place: '독일 프랑크푸르트', url: 'https://www.praxis-laemmerhirt.de/gyrotonic-frankfurt-center/', desc: '독일에서 교육 과정이 가장 많은 센터' },
  { name: 'Studio Anke Hauerstein', kind: '교육센터', place: '독일 베를린', url: 'https://www.ankehauerstein.de/en/', desc: '베를린의 지도자 교육 스튜디오' },
  { name: 'GYROTONIC® Soho – Movement Beyond', kind: '교육센터', place: '미국 뉴욕', url: 'https://www.movementbeyond.com/', desc: '뉴욕 소호의 지도자 교육 센터' },
  { name: 'GYROTONIC® Coral Gables', kind: '교육센터', place: '미국 마이애미', url: 'http://www.gyrotoniccoralgables.com', desc: '마이애미 지역 대표 교육 스튜디오' },
  { name: 'GYROTONIC® Barcelona Gracia', kind: '교육센터', place: '스페인 바르셀로나', url: 'https://www.gyrotonicbarcelonagracia.com/', desc: '바르셀로나의 지도자 교육 센터' },
  { name: 'GYROTONIC® Roma', kind: '교육센터', place: '이탈리아 로마', url: 'https://www.gyrotonic-roma.com/', desc: '로마의 지도자 교육 센터' },
  { name: 'White Cloud Tokyo', kind: '교육센터', place: '일본 도쿄', url: 'https://www.whitecloudtokyo.com/', desc: '도쿄의 대표 지도자 교육 스튜디오' },
  { name: 'White Cloud Kyoto', kind: '교육센터', place: '일본 교토', url: 'https://www.white-cloud-kyoto.com/', desc: '교토의 지도자 교육 스튜디오' },
  { name: 'GYROTONIC® Melbourne', kind: '교육센터', place: '호주 멜버른', url: 'https://gyrotonicmelbourne.com.au/', desc: '호주의 대표 지도자 교육 스튜디오' },
];

(() => {
  const list = document.getElementById('ref-list');
  if (!list) return;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  list.innerHTML = window.GYRO_REFS.map((r) => `
    <a class="ref" href="${esc(r.url)}" target="_blank" rel="noopener">
      <div class="ref-body">
        <p class="ref-meta">${esc(r.kind)} · ${esc(r.place)}</p>
        <h3>${esc(r.name)}</h3>
        <p>${esc(r.desc)}</p>
      </div>
      <span class="arrow" aria-hidden="true">↗</span>
    </a>`).join('');
})();
