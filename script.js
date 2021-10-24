const surfaces = document.getElementsByClassName("surfaces");
const objects = document.getElementsByClassName("objects");
const fan = document.getElementById("fan");

// word bubble hover events -----------------------------------------
for (var i = 0; i < objects.length; i++) {
    objects[i].addEventListener("mouseover", function() {
        word.innerHTML = `<p>${this.title}</p>`;
    });
}

for (var i = 0; i < surfaces.length; i++) {
    surfaces[i].addEventListener("mouseover", function() {
        word.innerHTML = "<h4>Welcome!<br>I'm Brandon Rimes, Software Developer.<br>I designed this space to display my<br>variegated experience and interests,<br>with intent to be more interactive<br>and less verbose.<br>There is more to come...<br>Enjoy!</h4>";
    });
}

// ceiling fan speed ------------------------------------------------
let fanSetting = 1;
let fanSpeed = ""
fan.addEventListener("click", function() {
    if (fanSetting === 3) {
        fanSetting = 1;
        fanSpeed = "5s";
    } else if (fanSetting === 2) {
        fanSetting = 3;
        fanSpeed = "0.25s";
    } else if (fanSetting === 1) {
        fanSetting = 2;
        fanSpeed = "1s";
    }
    
    document.getElementById("fan-blades").style.animationDuration = fanSpeed;
})