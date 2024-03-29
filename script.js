const surfaces = document.getElementsByClassName("surfaces");
const objects = document.getElementsByClassName("objects");
const fan = document.getElementById("fan");
const wordBubble = document.getElementById("word");
const mobileView = document.getElementById("mobile");
const mobileViewToggle = document.getElementById('mobile-view-toggle');
const desktopViewCloseBtn = document.getElementById("desktopViewCloseBtn");

// word bubble hover events -----------------------------------------
for (var i = 0; i < objects.length; i++) {
    objects[i].addEventListener("mouseover", function() {
        word.innerHTML = `<p>${this.title}</p>`;
    });
}

for (var i = 0; i < surfaces.length; i++) {
    surfaces[i].addEventListener("mouseover", function() {
        word.innerHTML = `<h4>Welcome!<br>I'm Brandon Rimes, Software Developer.<br>I designed this space to display my variegated experience<br>and interests, with intent to be more interactive and less verbose.<br><span id='mobile-view-toggle'>Click here to toggle the mobile version.</span> It has more words and fewer pictures.<br>Samples of my work are on the bookshelf.<br>There is more to come...<br>Enjoy!</h4>`;
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

// desktop display of mobile view -------------------------------
wordBubble.addEventListener("click", (e) => {
    let width = window.getComputedStyle(mobileView).getPropertyValue("width");
    if(e.target.id == "mobile-view-toggle") {
        width == "0px" ? mobileView.style.width = "33vw" : mobileView.style.width = "0px"
    }
})

desktopViewCloseBtn.addEventListener("click", () => {
    mobileView.style.width = "0px";
})

// mobile view ---------------------------------------
const mobileHeader = document.getElementById("mobile-header");
const info = document.getElementById("info");
const infos = document.getElementById("infos");
const me = document.getElementById("me");

// hello info -------------------------------------
const helloInfo = `
    <h5>Hello</h5>
    <p class='paragraph'>
        Welcome to my bio page.
        <br>
        Read about me in the categories below.
        <br>
        See my code on GitHub, view my resume on LinkedIn, and connect with me via email.
        <br>
        Thanks for visiting!
    </p>
    <p id='closingP'>☕️</p>
`;

// education info ---------------------------------
const educationInfo = `
    <h5>Education</h5>

    <h4>PDX Code Guild</h4>
    <p class='paragraph'>
        Immersive, full-stack web development bootcamp.
        <br>
        Python, JavaScript, HTML5 / CSS3, Vue.js, DjangoREST
        <br>
        - 2021
    </p>
    <img id='pdx-cert' src='images/cert.png'>

    <h4>Code Fellows</h4>
    <p class='paragraph'>
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
    <p class='paragraph'>
        Therapeutic massage training focused on awareness and communication
        <br>
        - 2018
    </p>

    <h4>NNPTC</h4>
    <p class='paragraph'>
        Naval Nuclear Power Training Command
        <br>
        Where the US Navy trains nuclear propulsion engineers.
        <br>
        Classes in mechanical/electrical engineering, mathematics, thermodynamics, chemistry, nuclear physics, and radiation health/safety.
        <br>
        - 2011
    </p>

    <h4>Embry Riddle</h4>
    <p class='paragraph'>
        Aeronautical University
        <br>
        I studied aeronautical science and logged flight hours in pilot training. After a successful year, I left to join the US Navy in pursuit of more intensive, debt-free pilot training.
        <br>
        - 2009
    </p>

    <h4>Jupiter High School</h4>
    <p class='paragraph'>
        Class of 2009
    </p>
    
    <h4>Autodidactically</h4>
    <p class='paragraph'>
        I continually advance and expand my professional and recreational skills through technical books and online resources, such as Lynda.com, LinkedIn Learning, and Code Academy.
        <br>
        I am a self-taught musician of many instruments, gardener, and parent.
    </p>

    <p id='closingP'>☕️</p>
`;

// experience info --------------------------------
const experienceInfo = `
    <h5>Experience</h5>
    
    <p class='subcat'>Freelance Projects</p>

    <a href='https://genuine-kelpie.netlify.app/'>
        <h4>The Touch Of Presence</h4>
    </a>
    <p>
        Business site for a Massage Therapist
    </p>
    <img src='images/touchofpresence-screenshot.png'>
    <p class='paragraph'>
        This client had an existing Squarespace site and wanted something new from scratch. Given a color scheme and logo, along with three guiding principles; Simple, elegant, and interactive; we brought her vision to fruition.
    </p>

    <a href='https://877-smash-now.netlify.app/'>
        <h4>877 Smash Now</h4>
    </a>
    <p>
        Landing page for a Super Smash Bros. league.
    </p>
    <img src='images/smash.png'>
    <p class='paragraph'>
        The client wanted an interactive design with eye-catching relevance to potential game league members. With much creative liberty and frequent, thoughtful communication, we designed, planned, and executed this Switch controller emulation.
    </p>

    <h4>Tutoring</h4>
    <p class='paragraph'>
        I help fellow developers learn, write, and debug CSS and JavaScript via Discord and Miro.
    </p>

    <p class='subcat'>Employment History</p>

    <h4>Brandon Rimes, LMT</h4>
    <p>
        Self employed, Licensed Massage Therapist.
    </p>
    <p class='paragraph'>
        Utilizing professional communication training to achieve clients' wellness goals. I practiced various modalities, primarily treating injury recovery. I organized advertising, media, scheduling, treatment plans, client notes, locations, and payments.
    </p>
    <p>
        Awareness - Details - Communication
    </p>

    <h4>Prince Telecom</h4>
    <p>
        Cable Tech, Solutions Architect
    </p>
    <p class='paragraph'>
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
    <p class='paragraph'>
        Operated, maintained, and repaired machinery and equipment in propulsion plant spaces. Maintenance procedure oversight, extensive use of tools, log keeping, damage control.
    </p>
    <p>
        Mechanical Aptitude - Technical Knowledge
    </p>

    <h4>Other</h4>
    <p class='paragraph'>
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

    <p id='closingP'>☕️</p>
`;

// more info --------------------------------------
const moreInfo = `
    <h5>More!</h5>

    <p class='subcat'>Software Development</p>
    <p class='paragraph'>
        I was inspired into developing software as a career when I heard about <a href='https://www.google.com/search?q=automated+reforestation&oq=automated+reforestation&aqs=chrome..69i57j33i160i395l2.7409j1j1&sourceid=chrome&ie=UTF-8' target='_blank'>automated reforestation.</a> The potential to work on planet-positive projects of any scale, from anywhere, really drew me in.
        <br>
        I've also developed a great appreciation for clever and thoughtful user experience design.
    </p>
    <h4>Tech & Tools</h4>
    <div id='tech'>
        <div id='tech-js' class='techs'>
            <img class='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'>
            <p>JavaScript</p>
        </div>
        <div id='tech-python' class='techs'>
            <img class='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'>
            <p>Python</p>
        </div>
        <div id='tech-html' class='techs'>
            <img class='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'>
            <p>Html5</p>
        </div>
        <div id='tech-css' class='techs'>
            <img class='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'>
            <p>Css3</p>
        </div>
        <div id='tech-react' class='techs'>
            <img class='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'>
            <p>React.js</p>
        </div>
        <div id='tech-node' class='techs'>
            <img class='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'>
            <p>Node.js</p>
        </div>
        <div id='tech-three' class='techs'>
            <img class='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg'>
            <p>Three.js</p>
        </div>
        <div id='tech-vue' class='techs'>
            <img class='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'>
            <p>Vue.js</p>
        </div>
        <div id='tech-django' class='techs'>
            <img class='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'>
            <p>Django</p>
        </div>
        <div id='tech-mongo' class='techs'>
            <img class='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'>
            <p>MongoDB</p>
        </div>
        <div id='tech-bootstrap' class='techs'>
            <img class='techLogo' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'>
            <p>Bootstrap</p>
        </div>
    </div>

    <p class='subcat'>Professional Journey</p>
    <p class='paragraph'>
        I was born in Jupiter, FL. Out of highschool, I attended <em>Embry Riddle Aeronautical University</em>. I studied aeronautical science and logged flight hours in a Cessna 172. My goal was to fly commercial planes internationally, or search and rescue helicopters. After a successful year at ERAU, I looked instead towards a military career path, in favor of the superior, debt-free training.
    </p>
    <p class='paragraph'>
        The Navy has the most pilot positions of any branch. Navy pilots are officers. Officers come from Officer Candidate School, for which a degree is required, or through various enlisted-to-officer opportunities. I enlisted as a Nuclear Machinists Mate, under pretense of it fast-tracking the enlisted->officer->pilot path.
    </p>
    <p class='paragraph'>
        At <em>Naval Nuclear Power Training Command</em>, I studied the science and engineering of designing, operating, and maintaining naval nuclear propulsion plants. The program is widely acknowledged as having the most demanding academic program in the U.S. military.
        Topics include Thermodynamics, Nuclear Physics, Chemistry, Material Science and Metallurgy, Electrical Power Theory, and Mathematics.
        <br>
        I grew exponentially in knowledge and experience there and in my station on an aircraft carrier.
    </p>
    <p class='paragraph'>
        The Nuclear rating, as it turns out, is one of very few ratings that can not be transferred out of. I could commission as an officer, but only in the nuclear field, and there are no nuclear-powered aircraft.
        <br>
        A career in civilian power plant engineering was not what I wanted for my life. I kept my Sailor days brief and reevaluated my goals post-Navy.
    </p>
    <p class='paragraph'>
        I took a job as a Cable Tech whilst I explored where to apply my GI Bill.
    </p>
    <p class='paragraph'>
        I enjoy being immersed in nature, parenting, gardening, playing various musical instruments, creating ornate objects (furniture, art, tools, etc.), traveling, learning, teaching, connecting with and helping people, and sharing these things with my fellow humans.
    </p>
    <p class='fineprint'>
        * Tech logos from <a href='https://devicon.dev/'>Devicon</a>
    </p>
    <p id='closingP'>☕️</p>
`;

// info map ---------------------------------------
const infoCategories = {
    "hello": helloInfo,
    "education": educationInfo,
    "experience": experienceInfo,
    "more": moreInfo
}

// click in the info options box
infos.addEventListener("click", (e) => {
    info.innerHTML = infoCategories[e.target.id] ?? infoCategories["hello"];
    info.scrollTo(0,0);

    // selected info styling
    let unselected = document.querySelector(".selectedInfos");
    if(unselected) {
        unselected.classList.remove("selectedInfos");
    }
    if(e.target.className.includes("infos")) {
        e.target.classList.toggle("selectedInfos");
    }
});

// click on my photo
me.addEventListener("click", (e) => {
    info.innerHTML = infoCategories["hello"];

    // remove selected info styling
    let unselected = document.querySelector(".selectedInfos");
    if(unselected) {
        unselected.classList.remove("selectedInfos");
    }
});

// click in the header
mobileHeader.addEventListener("click", (e) => {
    info.innerHTML = infoCategories["hello"];

    // remove selected info styling
    let unselected = document.querySelector(".selectedInfos");
    if(unselected) {
        unselected.classList.remove("selectedInfos");
    }
});

// tech logo motion
info.addEventListener("scroll", (e) => {

    const techs = [...document.getElementsByClassName("techs")];
    const techLogos = [...document.getElementsByClassName("techLogo")];

    for(let logo of techLogos) {
        let y = logo.getBoundingClientRect().y;
        let x = logo.getBoundingClientRect().x;
        if(y > 280 && y < 420) {
            logo.style.transform = `translateX(${430 - y}px) scale(${1 + x/200}) translateY(33%)`;
        } else if(y < 280 && y > 150) {
            logo.style.transform = `translateX(${y - 140}px) scale(${1 + x/200}) translateY(33%)`;
        } else {
            logo.style.transform = `translateY(33%)`;
        }
    }
});
