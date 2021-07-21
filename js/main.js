$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Blogger", "Designer", "Hacker"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Blogger", "Designer", "Hacker"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});
let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.85,
  fill: { gradient: ['#a445b2', '#fa4299'] },
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function (event, progress, stepValue) {
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
$(".js .bar").circleProgress({
  value: 0.70
});
$(".react .bar").circleProgress({
  value: 0.60
});


/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close')

/*SHOW*/
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('shown')
})

/*HIDDEN*/
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('shown')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  navMenu.classList.remove('shown')
}
navLink.forEach(n => n.addEventListener('click', linkAction));



window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}



function changeMode(themeobj) {
  var y = document.getElementById('hid1');
  if (themeobj.dataset.mode == "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeobj.dataset.mode = "dark";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeobj.dataset.mode = "light";
  }
}