const navTitles = document.querySelectorAll('.nav-title');

navTitles.forEach(title => {
    title.addEventListener('click', function(event) {
        const navItem = this.nextElementSibling; // nav-title의 다음 형제 요소인 nav-item-details를 선택
        if (navItem && navItem.classList.contains('nav-item-details')) {
            // display 상태를 토글
            if (navItem.style.display === 'flex') {
                navItem.style.display = 'none';
                this.style.color = '#fff'; // 제목의 색상 복원
            } else {
                // 다른 모든 nav-item-details를 숨김
                document.querySelectorAll('.nav-item-details').forEach(item => {
                    item.style.display = 'none';
                });
                navItem.style.display = 'flex';
                this.style.color = '#F20505'; // 클릭한 제목의 색상 변경
            }
        }
    });
});