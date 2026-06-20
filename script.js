/* ==========================
   TYPING ANIMATION
========================== */

const typingText = document.getElementById("typing");

const roles = [
  "Information Technology Student",
  "Web Developer",
  "FTIA Certified Threat Intelligence Analyst",
  "Former IT Intern at PT Pos Indonesia Regional I"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {

  const currentRole = roles[roleIndex];

  if (!deleting) {

    typingText.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {

      deleting = true;

      setTimeout(typeWriter, 2000);

      return;
    }

  } else {

    typingText.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }

    }

  }

  setTimeout(typeWriter, deleting ? 50 : 100);

}

typeWriter();


/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

const speed = 200;

const animateCounter = () => {

  counters.forEach(counter => {

    const target =
    +counter.getAttribute("data-target");

    const count =
    +counter.innerText;

    const increment =
    target / speed;

    if (count < target) {

      counter.innerText =
      Math.ceil(count + increment);

      setTimeout(animateCounter, 15);

    } else {

      counter.innerText = target;
    }

  });

};

const statsSection =
document.querySelector(".stats");

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

animateCounter();

observer.unobserve(entry.target);

}

});

});

observer.observe(statsSection);


/* ==========================
   IMAGE MODAL
========================== */

const modal =
document.getElementById("modal");

const modalImg =
document.getElementById("modal-img");

const galleryImages =
document.querySelectorAll(".gallery-img");

const closeBtn =
document.querySelector(".close");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

modal.style.display = "block";

modalImg.src = img.src;

});

});

closeBtn.addEventListener("click", () => {

modal.style.display = "none";

});

window.addEventListener("click", e => {

if(e.target === modal){

modal.style.display = "none";

}

});


/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if(pageYOffset >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href")
=== "#" + current){

link.classList.add("active");

}

});

});





/* ==========================
   BACK TO TOP BUTTON
========================== */

const backToTop =
document.createElement("button");

backToTop.innerHTML =
'<i class="fas fa-arrow-up"></i>';

backToTop.id =
"backToTop";

document.body.appendChild(backToTop);

backToTop.style.position =
"fixed";

backToTop.style.bottom =
"25px";

backToTop.style.right =
"25px";

backToTop.style.width =
"55px";

backToTop.style.height =
"55px";

backToTop.style.border =
"none";

backToTop.style.borderRadius =
"50%";

backToTop.style.cursor =
"pointer";

backToTop.style.background =
"#2563eb";

backToTop.style.color =
"#fff";

backToTop.style.fontSize =
"18px";

backToTop.style.display =
"none";

backToTop.style.zIndex =
"999";

backToTop.style.boxShadow =
"0 0 20px rgba(37,99,235,.5)";

window.addEventListener("scroll", () => {

if(window.scrollY > 400){

backToTop.style.display =
"block";

}else{

backToTop.style.display =
"none";

}

});

backToTop.addEventListener(
"click",
() => {

window.scrollTo({

top:0,
behavior:"smooth"

});

});


/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

document
.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});

});

});


/* ==========================
   NAVBAR SHADOW
========================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener(
"scroll",
() => {

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 5px 20px rgba(0,0,0,.3)";

}else{

navbar.style.boxShadow =
"none";

}

});


/* ==========================
   PRELOADER EFFECT
========================== */

window.addEventListener(
"load",
() => {

document.body.classList.add(
"loaded"
);

});


/* ==========================
   CONSOLE SIGNATURE
========================== */

console.log(
"%cAulia Syahri Pahleza Portfolio",
"color:#38bdf8;font-size:18px;font-weight:bold;"
);

console.log(
"Built with HTML, CSS & JavaScript"
);

const certificates =
document.querySelectorAll(
'.certificate-grid img'
);

certificates.forEach((img,index)=>{

img.style.opacity='0';

img.style.transform=
'translateY(30px)';

setTimeout(()=>{

img.style.transition=
'all .7s ease';

img.style.opacity='1';

img.style.transform=
'translateY(0)';

},index*150);

});