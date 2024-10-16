const navheader = document.getElementById("nav-header")


navheader.addEventListener('click', function() {
    const navitem = navheader.querySelector(".nav-item-details");
    const navtitle = document.querySelector(".nav-title");
    if (navitem.style.display === "flex") {
        navitem.style.display = "none";
        navtitle.style.color = "#fff";
    } else {
        navitem.style.display = "flex";
        navtitle.style.color = "#F20505";
    }
});