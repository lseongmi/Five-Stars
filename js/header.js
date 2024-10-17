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
                // 다른 모든 nav-item-details를 숨김 및 모든 제목의 색상을 기본값으로 변경
                document.querySelectorAll('.nav-item-details').forEach(item => {
                    item.style.display = 'none';
                });
                document.querySelectorAll('.nav-title').forEach(item => {
                    item.style.color = '#fff'; // 모든 제목의 색상을 기본값으로 변경
                });

                navItem.style.display = 'flex';
                this.style.color = '#F20505'; // 클릭한 제목의 색상 변경
            }
        }
    });
});