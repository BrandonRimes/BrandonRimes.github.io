// word bubble hover events -----------------------------------------
    // self ----------------------
document.getElementById("self").addEventListener("mouseover", function() {
    word.innerHTML = "<p>It's me!</p>";
});
    // email ---------------------
document.getElementById("email").addEventListener("mouseover", function() {
    word.innerHTML = "<p>Send me an email!</p>";
});
    // linkedin ------------------
document.getElementById("linkedin").addEventListener("mouseover", function() {
    word.innerHTML = "<p>Connect with me on LinkedIn!</p>";
});
    // github --------------------
document.getElementById("github").addEventListener("mouseover", function() {
    word.innerHTML = "<p>See my code on GitHub!</p>";
});
    // ceiling fan ---------------
document.getElementById("fan").addEventListener("mouseover", function() {
    word.innerHTML = "<p>My biggest fan!</p>";
});
    // book js -------------------
document.getElementById("book-js").addEventListener("mouseover", function() {
    word.innerHTML = "<p>I know JavaScript!</p>";
});
    // book py -------------------
document.getElementById("book-py").addEventListener("mouseover", function() {
    word.innerHTML = "<p>I know Python!</p>";
});
    // book html -----------------
document.getElementById("book-html").addEventListener("mouseover", function() {
    word.innerHTML = "<p>I know HTML!</p>";
});
    // book css ------------------
document.getElementById("book-css").addEventListener("mouseover", function() {
    word.innerHTML = "<p>I know CSS!</p>";
});
    // book django ---------------
document.getElementById("book-django").addEventListener("mouseover", function() {
    word.innerHTML = "<p>I know Django!</p>";
});
    // book vue ------------------
document.getElementById("book-vue").addEventListener("mouseover", function() {
    word.innerHTML = "<p>I know Vue.js!</p>";
});
    // puppub --------------------
document.getElementById("puppub").addEventListener("mouseover", function() {
    word.innerHTML = "<p>PupPub!<br>A Django REST && Vue app<br>hosted on Heroku</p>";
});
    // when not hovering an object
const surfaces = document.getElementsByClassName("surfaces");
for (var i = 0; i < surfaces.length; i++) {
    surfaces[i].addEventListener("mouseover", function() {
        word.innerHTML = "<p>Welcome!<br>Make yourself at home.</p>";
    });
}