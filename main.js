window.onload = function () {
    generateBackground();

    changePic(1);
};

function changePic(counter) {
    if (counter == 6) {
        counter = 1;
    }

    document.getElementById("matt-and-makeda").src = "img/matt-and-makeda-" + counter + ".png";

    setTimeout(changePic, 4000, ++counter)
}

function randomNumber(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}

function generateBackground() {
    background = document.getElementById("background");
    var skews = [
        [0, 93, 0, 15],
        [0, 93, 80, 95]];
    for (i = 0; i < 50; i++) {
        star = document.createElement("img");
        skew = randomNumber(0, 1);
        topPos = randomNumber(skews[skew][0], skews[skew][1]);
        leftPos = randomNumber(skews[skew][2], skews[skew][3]);
        star.style = 'top:' + topPos + '%;'
            + 'left:' + leftPos + '%;'
            + 'position: absolute; z-index: -2; ';
        if (randomNumber(0, 100) > 80) {
            star.src = "img/star.svg";
            size = randomNumber(5, randomNumber(10, 100));
        } else {
            star.src = "img/dot.svg";
            size = randomNumber(5, 15);
        }
        star.width = size
        star.hight = size
        background.appendChild(star);
    }
}