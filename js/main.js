
let allData;

const showData = (data) => {
    const playerhistory = document.getElementsByClassName("history")[0];

    let IMGString = "";
    let previousTitle = ""; // 이전 타이틀을 저장할 변수

    data.forEach((element) => {
        // 타이틀이 이전과 다를 경우에만 추가
        if (element.title !== previousTitle) {
            IMGString += `<div class="year-title">${element.title}</div>\n`;
            previousTitle = element.title; // 현재 타이틀을 이전 타이틀로 업데이트
        }

        // main 이미지 추가
        if (Array.isArray(element.main)) {
            IMGString += `<div class="player-history-container">\n`;
            element.main.forEach((img) => {
                IMGString += `
                    <div class="player-history">
                        <img src="../img/${img}">
                    </div>\n`;
            });
            IMGString += `</div>\n`; // 컨테이너 닫기
        } else {
            IMGString += `
                <div class="player-history-container">
                    <div class="player-history">
                        <img src="../img/${element.main}" alt="">
                    </div>
                </div>\n`;
        }

        // win 이미지와 wintitle 추가
        if (element.win && Array.isArray(element.win) && element.wintitle && Array.isArray(element.wintitle)) {
            IMGString += `<div class="player-history-container">\n`;
            element.win.forEach((img, index) => {
                IMGString += `
                    <div class="win-section">
                        <img src="../img/${img}" alt="">
                        <div class="win-title">${element.wintitle[index]}</div>
                    </div>\n`;
            });
            IMGString += `</div>\n`; // 컨테이너 닫기
        }
    });

    playerhistory.innerHTML = IMGString;
};




const setData = ((data) => {
    allData = data;
    showData(data);
});

const getData = (() => {
    const url = '../js/history.json';
    fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
});
getData();
