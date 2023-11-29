let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick  = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '50px',
    duration: 2550,
    rest: true
});

sr.reveal('.home-text h3',{delay:300});
sr.reveal('.home-text h1',{delay:400, origin: "left"});
sr.reveal('.home-text h4',{delay:500, origin: "right"});
sr.reveal('.home-text p',{delay:500, origin: "left"});
sr.reveal('.social-icons',{delay:700, origin: "right"});
sr.reveal('.main-btn',{delay:800, origin: "bottom"});
sr.reveal('.home-img',{delay:800, origin: "top"});
sr.reveal('.about h2',{delay:500, origin: "bottom"});
sr.reveal('.about-img img',{delay:500, origin: "left"});
sr.reveal('.about-text p',{delay:550, origin: "bottom"});
sr.reveal('.education-title h2',{delay:400, origin: "top"});
sr.reveal('.box',{delay:500, origin: "top"});
sr.reveal('.skills-title h2',{delay:400, origin: "top"});
sr.reveal('.skills-icons1',{delay:450, origin: "top"});
sr.reveal('.skills-icons2',{delay:450, origin: "top"});
sr.reveal('.project-title',{delay:500, origin: "top"});
sr.reveal('.project-cards',{delay:400, origin: "top"});
sr.reveal('.contact-title h2',{delay:350, origin: "top"});
sr.reveal('.name',{delay:400, origin: "top"});
sr.reveal('.number',{delay:450, origin: "top"});
sr.reveal('.email',{delay:500, origin: "top"});
sr.reveal('.discription',{delay:550, origin: "top"});
sr.reveal('.contact label',{delay:600, origin: "top"});
sr.reveal('.btn',{delay:700, origin: "top"});
