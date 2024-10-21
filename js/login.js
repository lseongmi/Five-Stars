document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "t1fan" && password === "t1fan1234") {
            localStorage.setItem("login", "true");
            localStorage.setItem("username", username);
            alert("로그인 성공");
            window.location.href = "../index.html";
        } else {
            alert("로그인 실패");
        }
    });
});
