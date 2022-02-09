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
        word.innerHTML = "<h4>Welcome!<br>I'm Brandon Rimes, Software Developer.<br>I designed this space to display my variegated experience<br>and interests, with intent to be more interactive and less verbose.<br>Samples of my work are on the bookshelf.<br>There is more to come...<br>Enjoy!</h4>";
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

// mobile view ---------------------------------------
const mobileHeader = document.getElementById("mobile-header");
const info = document.getElementById("info");
const infos = document.getElementById("infos");
const me = document.getElementById("me");

// hello info -------------------------------------
const helloInfo = `
    <h5>Hello</h5>
    <p>
        Welcome to my bio page.
        <br>
        I've arranged the info into the categories below.
        <br>
        See my code on GitHub, view my resume on LinkedIn, and connect with me via email.
        <br>
        Thanks for visiting!
    </p>
    <p class='closingP'>☕️</p>
`;

// education info ---------------------------------
const educationInfo = `
    <h5>Education</h5>

    <h4>PDX Code Guild</h4>
    <p>
        Immersive, full-stack web development bootcamp.
        <br>
        Python, JavaScript, HTML5 / CSS3, Vue.js, DjangoREST
        <br>
        - 2021
    </p>
    <img id='pdx-cert' src='images/cert.png'>

    <h4>Code Fellows</h4>
    <p>
        Intensive, full-stack web development bootcamp.
        <br>
        JavaScript, HTML5 / CSS3, React.js, Node.js, MongoDB, Express.
        <br>
        Data structures and algorithms.
        <br>
        Extensive team-programming experience with thorough use of Git, GitHub, and CLI.
        <br>
        - 2021
    </p>

    <h4>Florida School of Massage</h4>
    <p>
        Therapeutic massage training focused on awareness and communication
        <br>
        - 2018
    </p>

    <h4>NNPTC</h4>
    <p>
        Naval Nuclear Power Training Command
        <br>
        Where the US Navy trains nuclear propulsion engineers.
        <br>
        Classes in mechanical/electrical engineering, mathematics, thermodynamics, chemistry, nuclear physics, and radiation health/safety.
        <br>
        - 2011
    </p>

    <h4>Embry Riddle</h4>
    <p>
        Aeronautical University
        <br>
        I studied aeronautical science and logged flight hours in pilot training. After a successful year, I left to join the US Navy in pursuit of more intensive, debt-free training.
        <br>
        - 2009
    </p>

    <h4>Jupiter High School</h4>
    <p>
        Class of 2009
    </p>
    
    <h4>Autodidactically</h4>
    <p>
        I continually advance and expand my professional and recreational skills through technical books and online resources, such as Lynda.com, LinkedIn Learning, and Code Academy.
        <br>
        I am a self-taught musician of many instruments, gardener, and parent.
    </p>

    <p class='closingP'>☕️</p>
`;

// experience info --------------------------------
const experienceInfo = `
    <h5>Experience</h5>
    
    <p class='subcat'>Freelance Projects</p>

    <a href='https://877-smash-now.netlify.app/'>
        <h4>877 Smash Now</h4>
    </a>
    <p>
        Landing page for a Super Smash Bros. league.
    </p>
    <img src='images/smash.png'>
    <p>
        The client wanted an interactive design with eye-catching relevance to potential game league members. With much creative liberty and frequent, thoughtful communication, we designed, planned, and executed this Switch controller emulation.
    </p>

    <h4>Tutoring</h4>
    <p>
        I help fellow developers learn, write, and debug CSS and JavaScript via Discord and Miro.
    </p>

    <p class='subcat'>Employment History</p>

    <h4>Brandon Rimes, LMT</h4>
    <p>
        Self employed, Licensed Massage Therapist.
    </p>
    <p>
        Utilizing professional communication training to achieve clients' wellness goals. I practiced various modalities, primarily treating injury recovery. I organized advertising, media, scheduling, treatment plans, client notes, locations, and payments.
    </p>
    <p>
        Awareness - Details - Communication
    </p>

    <h4>Prince Telecom</h4>
    <p>
        Cable Tech, Solutions Architect
    </p>
    <p>
        Residential cable internet and tv installation and repair. From whole house wiring, equipment installation, and networking from scratch, to legacy system/equipment troubleshooting. I was the one to call for the most abstract problems, and often heard from clients "You're the nth tech to come here and the first one to fix it!"
        <br>
        I trained new techs in the field and constructed training aids for the shop.
    </p>
    <p>
        Critical Thinking - Details - Abstraction
    </p>

    <h4>US Navy</h4>
    <p>
        Nuclear Propulsion Machinists Mate
    </p>
    <p>
        E5 - CVN74
    </p>
    <p>
        Operated, maintained, and repaired machinery and equipment in propulsion plant spaces. Maintenance procedure oversight, extensive use of tools, log keeping, damage control.
    </p>
    <p>
        Mechanical Aptitude - Technical Knowledge
    </p>

    <h4>Other</h4>
    <p>
        I have held various positions in food service and retail while in schools and other transitional periods;
        <br>- Ampersand Graphics: Screen Printing
        <br>- Fruits & Roots Vegan Cafe: Prep/Line Cook
        <br>- Jupiter Donuts
        <br>- Lowes: Outside Garden
        <br>- Sal's Italian: Pizza Cook
        <br>- JetRide: Dockhand
        <br>- V Pizza: Pizzaiolo
        <br>- Home Depot: Paint
        <br>- Outback Steakhouse
        <br>- Atlanta Bread Co.
    </p>

    <p class='closingP'>☕️</p>
`;

// more info --------------------------------------
const moreInfo = `
    <h5>More!</h5>

    <p class='subcat'>Software Development</p>
    <p>
        I was inspired into developing software as a career when I heard about <a href='https://www.google.com/search?q=automated+reforestation&oq=automated+reforestation&aqs=chrome..69i57j33i160i395l2.7409j1j1&sourceid=chrome&ie=UTF-8'>automated reforestation.</a> The potential to work on planet-positive projects of any scale, from anywhere, really drew me in.
        <br>
        I've also developed a great appreciation for clever and thoughtful user experience design.
    </p>
    <h4>Tech & Tools</h4>
    <div id='tech'>
        <p id='tech-js'>JavaScript</p>
        <p id='tech-python'>Python</p>
        <p id='tech-html'>Html5</p>
        <p id='tech-css'>Css3</p>
        <p id='tech-react'>React.js</p>
        <p id='tech-node'>Node.js</p>
        <p id='tech-three'>Three.js</p>
        <p id='tech-vue'>Vue.js</p>
        <p id='tech-django'>Django</p>
        <p id='tech-mongo'>MongoDB</p>
        <p id='tech-bootstrap'>Bootstrap</p>
    </div>

    <p class='subcat'>Background</p>
    <p>
        I was born in Jupiter, FL 31 years ago under a Scorpio sun, and currently reside in Stuart, FL. My insatiable thirst for knowledge and ‘hit the ground running’ attitude enable me to learn with agility and eloquence. My brain is entertained by intricate puzzles and problems, with a flair for clever design and organic beauty.
    </p>
    <p>
        I enjoy being immersed in nature, parenting, gardening, playing various musical instruments, creating ornate objects (furniture, art, tools, etc.), traveling, learning, teaching, connecting with and helping people, and sharing these things with my fellow humans.
    </p>

    <p class='fineprint'>
        * Tech logos from <a href='https://devicon.dev/'>Devicon</a>
    </p>
    <p class='closingP'>☕️</p>
`;

// info map ---------------------------------------
const infoCategories = {
    "education": educationInfo,
    "experience": experienceInfo,
    "more": moreInfo,
    "hello": helloInfo
}

infos.addEventListener("click", (e) => {
    info.innerHTML = infoCategories[e.target.id] ?? infoCategories["hello"];
    info.scrollTo(0,0);
});

me.addEventListener("click", (e) => {
    info.innerHTML = infoCategories["hello"];
});

mobileHeader.addEventListener("click", (e) => {
    info.innerHTML = infoCategories["hello"];
});
