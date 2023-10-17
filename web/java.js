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
sr.reveal('.scroll a',{delay:850, origin: "top"});
sr.reveal('.home-img',{delay:850, origin: "top"});