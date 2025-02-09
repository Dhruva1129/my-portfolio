document.getElementById("download-btn").addEventListener("click", () => {
  const link = document.getElementById("download-link");
  link.click();
});

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

document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.project-card2');
      card.classList.toggle('expanded');
  
      if (card.classList.contains('expanded')) {
        button.textContent = "Show Less";
      } else {
        button.textContent = "Show More";
      }
    });
  });
  
  let currentIndex = 0;

  function moveSlide(direction) {
    const slides = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".dot");
    currentIndex += direction;
  
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
  
    document.querySelector(".carousel-inner").style.transform = `translateX(-${currentIndex * 100}%)`;
  
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }
  
  function setSlide(index) {
    currentIndex = index;
    document.querySelector(".carousel-inner").style.transform = `translateX(-${currentIndex * 100}%)`;
  
    document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
    document.querySelectorAll(".dot")[index].classList.add("active");
  }
  
  // Auto Slide Every 5 Seconds
  setInterval(() => moveSlide(1), 5000);
  
