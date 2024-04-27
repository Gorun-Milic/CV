var textBox = document.querySelector('.text-box');

var aboutPart = document.querySelector('.about-me');
var skillsPart = document.querySelector('.skills');
var projectsPart = document.querySelector('.project1');
var contactPart = document.querySelector('.contact');
var experiencePart = document.querySelector('.experience');




//Navigation Elements
var aboutElement = document.querySelector('.navigation-element1');
var skillsElement = document.querySelector('.navigation-element2');
var projectsElement = document.querySelector('.navigation-element3');
var experienceElement = document.querySelector('.navigation-element4');
var contactElement = document.querySelector('.navigation-element5');

//initial function
setTimeout(function() {
    textBox.classList.add('text-box-animation');
}, 0);

//adding event listeners
aboutElement.addEventListener('click', function() {
    aboutPart.scrollIntoView({behavior: "smooth", block: "start"});
})

skillsElement.addEventListener('click', function() {
    skillsPart.scrollIntoView({behavior: "smooth", block: "start"});
})

projectsElement.addEventListener('click', function() {
    projectsPart.scrollIntoView({behavior: "smooth", block: "start"});
})

contactElement.addEventListener('click', function() {
    contactPart.scrollIntoView({behavior: "smooth", block: "start"});
})

experienceElement.addEventListener('click', function() {
    experiencePart.scrollIntoView({behavior: "smooth", block: "start"});
})
