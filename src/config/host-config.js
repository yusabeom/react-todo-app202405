// 브라우저에서 현재 클라이언트의 호스트 이름 얻어오기
const clientHostName = window.location.hostname;

let backEndHostName; // 백엔드 서버 호스트 이름

// 현재 개발중인 리액트 프로젝트의 ip는 localhost 입니다. -> 백엔드도 localhost로 작업 진행중.
// 하지만, 나중에는 도메인을 구입하겠죠? 백엔드의 주소도 바뀔 수 있습니다.
// 리액트 내에서 백엔드를 지목하면서 fetch 요청을 많이 진행하고 있기 때문에, 주소 변경의 가능성을 염두에 두고
// 호스트 네임을 전역적으로 관리하려는 의도로 설정하는 파일입니다.
if (clientHostName === 'localhost') {
  // 개발 중
  backEndHostName = 'http://localhost:8181';
} else if (clientHostName === 'spring.com') {
  // 배포해서 서비스 중
  backEndHostName = 'https://api.spring.com';
}

export const API_BASE_URL = backEndHostName;
export const TODO = '/api/todos';
export const USER = '/api/auth';
