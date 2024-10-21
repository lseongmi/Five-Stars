document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    // 로그인 폼 제출 이벤트
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // 로그인 성공 처리 (무조건 성공)
        localStorage.setItem("login", "true");

        // 특정 값을 저장 (예: "특정 사용자 이름"만 저장)
        if (username === "t1fan" && password === "t1fan1234") { // 특정값을 실제 조건으로 설정
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            window.location.href = "../index.html";
        }

        alert("로그인 성공");
        checkLoginStatus(); // 로그인 상태 업데이트
    });
});
