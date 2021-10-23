// word bubble hover events -----------------------------------------
const objects = document.getElementsByClassName("objects");
for (var i = 0; i < objects.length; i++) {
    objects[i].addEventListener("mouseover", function() {
        word.innerHTML = `<p>${this.title}</p>`;
    });
}

const surfaces = document.getElementsByClassName("surfaces");
for (var i = 0; i < surfaces.length; i++) {
    surfaces[i].addEventListener("mouseover", function() {
        word.innerHTML = "<h4>Welcome!<br>I'm Brandon Rimes, Software Developer.</h4>";
    });
}

// ceiling fan speed ------------------------------------------------
let fanSetting = 1;
let fanSpeed = ""
document.getElementById("fan").addEventListener("click", function() {
    if (fanSetting === 3) {
        fanSetting = 1;
        fanSpeed = "5s";
    } else if (fanSetting === 2) {
        fanSetting = 3;
        fanSpeed = "0.25s"
    } else if (fanSetting === 1) {
        fanSetting = 2;
        fanSpeed = "1s"
    }
    
    document.getElementById("fan-blades").style.animationDuration = fanSpeed;
})