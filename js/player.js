
let allData;

const showData = ((data) => {
    // data 하나씩 뽑아서 <article> -> .product-container의 자식으로 넣자 <-HTML
    const playermain = document.getElementsByClassName("player-main")[0];
    
    DivString = "";
    data.forEach(element => {
        DivString += `<div class="player-main">
                <div class="player-profile">
                    <img src="../img/${element.img}" alt="${element.nickname}" class="player-image">
                    <img src="../img/${element.lineimg}" alt="${element.nickname}" class="player-line">
                    <div class-"player-info">
                        <div class="player-name">
                            <div>${element.nickname}</div>
                            <div>${element.Name}</div>
                        </div>
                        <div>${element.age}</div>
                        <div>${element.line}</div>
                    </div>
                </div>
            </div>\n`
    });
    playermain.innerHTML = DivString;

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