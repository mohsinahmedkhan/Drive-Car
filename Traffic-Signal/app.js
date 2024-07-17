var count = 5;
function moveCar() {
    var race = document.getElementById("car")
    count += 5;
    race.style.left = count + "px"

}
function go() {
    ref = setInterval(moveCar, 50)
}

function stop() {
    clearInterval(ref)
}

