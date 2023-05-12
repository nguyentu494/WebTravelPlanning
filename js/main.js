let profile = document.querySelector('.user-menu');
let menu = document.querySelector('.menu');

profile.onclick = function(){
    menu.classList.toggle('active');
}


const searchTour = document.getElementById('searchTour');

searchTour.addEventListener('click' , (e) => {
    window.location.href = "/create_trip-page/index.html"
})



const slides = document.querySelectorAll('.booking_cards');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

// Show the first slide
slides[index].classList.add('active');

// Previous button click event
prev.addEventListener('click', function() {
  slides[index].classList.remove('active');
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  slides[index].classList.add('active');
});

// Next button click event
next.addEventListener('click', function() {
  slides[index].classList.remove('active');
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slides[index].classList.add('active');
});
