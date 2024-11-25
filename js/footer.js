// 모든 footer-title과 footer-content 가져오기
const footertitles = document.querySelectorAll(".footer-title");
const snsimg = document.querySelector(".SNS-img");

footertitles.forEach((title) => {
    title.addEventListener("click", function () {
        // 클릭된 footer-title의 부모에서 footer-content 찾기
        const footerContent = this.nextElementSibling;

        if (footerContent) {
            // 현재 footer-content의 display 상태 확인
            const currentDisplay = getComputedStyle(footerContent).display;

            if (currentDisplay === "none") {
                footerContent.style.display = "block"; // 열기
            } else {
                footerContent.style.display = "none"; // 닫기
            }
        }
    });
});
