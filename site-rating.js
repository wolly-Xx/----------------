let siteRating = 0;

function star(starNumber) {
    siteRating = starNumber;

    console.log("Рейтинг:", siteRating);

    starNumber = starNumber - 1;

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    let star = document.getElementById(ids[starNumber])

    if (star.src.includes("images/star_2.png")) {

        for (let i = 0; i <= starNumber; i++) {
            let id = ids[i];
            document.getElementById(id).src = "images/star_1.png";
        }

    }
    //Иначе - звезда заполнена
    else {
        for (let i = 0; i < ids.length; i++) {
            if (i > starNumber) {
                let id = ids[i];
                document.getElementById(id).src = "images/star_2.png";
            }
        }
    }

}

const resetRating = document.getElementById("reset-rating")

resetRating.onclick = function () {

    siteRating = 0;
    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    for (let i = 0; i < ids.length; i++) {
        let id = ids[i];
        document.getElementById(id).src = "images/star_2.png";
    }
}

const sendRatingBtn = document.getElementById("sendRating");

sendRatingBtn.addEventListener('click', function () {

    let text;

    text = siteRating;

    if (siteRating === 0) {
        text = "Пожалуйста, поставьте оценку от 1 до 5"
    }

    else if (siteRating === 5) {
        text = "Спасибо за высокую оценку!";
    }

    else if (siteRating === 4) {
        text = "Спасибо за хороший балл!";
    }
    else {
        text = "Спасибо за отзыв!";
    }


    document.getElementById("ratingText").innerText = text;

});
