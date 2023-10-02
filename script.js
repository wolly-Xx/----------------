const openBtnGift = document.getElementById("giftBtn");
const modalGift = document.getElementById("giftModal");
const closeBtnGift = document.getElementById("giftClose");

openBtnGift.onclick = function () {
   modalGift.style.display = "block";
}

closeBtnGift.onclick = function () {
    modalGift.style.display = "none";
}

modalGift.onclick = function (event) {
    if (event.target === modalGift) {
        modalGift.style.display = "none";
    }
}
