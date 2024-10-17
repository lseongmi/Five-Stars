 document.getElementById('kakaoButton').addEventListener('click', function(event) {
    event.preventDefault(); // 폼 제출 막기

     // Kakao 로그인 요청 URL
    const clientId = '5fa365d0962656690f16c769fc68bed0';  // 여기에 REST API 앱 키를 입력
    const redirectUri = 'https://www.example.com/oauth'; // 여기에 카카오 개발자 콘솔에 등록한 Redirect URI 입력
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = kakaoAuthUrl; // Kakao 로그인 페이지로 리디렉션
});

