let allData;
const playercontainer = document.getElementsByClassName("player-container")[0];
const showData = ((data) => {
    // 첫 번째 데이터만 사용하여 HTML 생성
    const element = data[2]; // 첫 번째 데이터만 사용


    const currentYear = new Date().getFullYear();
    const age = currentYear - element.year;

    const DivString = 
    `<div class="player-container">
            <div class="player-profile">
                <img src="../img/${element.img}" alt="${element.nickname}" class="player-image">
                <img src="../img/${element.lineimg}" alt="${element.nickname}" class="player-line">
                <div class="player-info">
                    <div class="player-name">
                        <div>${element.nickname}</div>
                        <div>${element.Name}</div>
                    </div>
                    <div>${element.Id}</div>
                    <div>${element.height}</div>
                    <div>${element.age} (만${age}세)</div>
                    <div>${element.line}</div>
                </div>
            </div>
        </div>`;
    
    playercontainer.innerHTML = DivString;
});

const setData = ((data) => {
    allData = data;
    showData(data);
});

const getData = (() => {
    const url = '../js/player.json';
    fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
});
getData();
