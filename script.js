$("#ytplayer").attr("src", "https://www.youtube.com/embed/m8LkBubFjA8?autoplay=1&start=" + getRandomInt(0, 1045));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max) / 5;
    return (Math.floor(Math.random() * (max - min + 1)) + min) * 5;
}