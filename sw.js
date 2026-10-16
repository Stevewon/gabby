// 홈 화면 · 바탕화면 앱 설치용 서비스 워커.
// 사진 · 센터 정보가 관리자에서 바뀌면 바로 보여야 하므로 아무것도 저장(캐시)하지 않고 항상 사이트에서 새로 받습니다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
