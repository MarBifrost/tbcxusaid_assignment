//Toffle FAQ hidden answers on click and also rotate arrows
document.querySelectorAll(".question").forEach((item) => {
  item.addEventListener("click", (event) => {
    const answerId = item.getAttribute("id").replace("q", "a");
    const answer = document.getElementById(answerId);
    answer.classList.contains("hidden-data")
      ? answer.classList.remove("hidden-data")
      : answer.classList.add("hidden-data");

    //rotate the arrow
    const arrow = item.querySelector(".arw_dwn");
    if (answer.classList.contains("hidden-data")) {
      arrow.style.transform = "rotate(0deg)";
    } else {
      arrow.style.transform = "rotate(180deg)";
    }
  });
});

//Slidershow functionality

let slideIndex = 1;
showSlides(slideIndex);

let slideInterval = setInterval(function () {
  plusSlides(1);
}, 3000);

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides((slideIndex += n));
  slideInterval = setInterval(function () {
    plusSlides(1);
  }, 3000); // Restart interval
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides((slideIndex = n));
  slideInterval = setInterval(function () {
    plusSlides(1);
  }, 3000); // Restart interval
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item_list");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


//Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}


const navLink = document.querySelectorAll(".nav_link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
}


