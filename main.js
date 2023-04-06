window.onload = function () {
    generateBackground();
};

function randomNumber(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}

function generateBackground() {
    background = document.getElementById("background");
    var skews = [
        [0, 20, 0, 93],
        [80, 93, 0, 93],
        [0, 93, 0, 20],
        [0, 93, 80, 93]];
    for (i = 0; i < 100; i++) {
        star = document.createElement("img");
        star.className = "star";
        skew = randomNumber(0, 3);
        topPos = randomNumber(skews[skew][0], skews[skew][1]);
        leftPos = randomNumber(skews[skew][2], skews[skew][3]);
        star.style = 'top:' + topPos + '%;'
            + 'left:' + leftPos + '%;'
            + 'position: absolute; z - index: -2; ';
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