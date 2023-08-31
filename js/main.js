let profile = document.querySelector('.user-menu');
let menu = document.querySelector('.menu');

profile.onclick = function(){
    menu.classList.toggle('active');
}

const searchTour = document.getElementById('searchTour');

searchTour.addEventListener('click' , (e) => {
    window.location.href = "../create_trip-page/index.html"
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

// AOS.init();

const modalPlan = document.getElementById("modalPlan");
const btnPlan =  document.getElementById("createPlan");
const btnClosePlan = document.querySelector(".closePlan");
    modalPlan.style.display = "none";
    btnPlan.onclick = function() {
      modalPlan.style.transitionDuration = "0.5s";
      modalPlan.style.display = "block";
    };
    btnClosePlan.onclick = function() {
      modalPlan.style.display = "none";
    };

const btn_trv = document.querySelector('.select_trv');
const btn_price = document.querySelector('.select_price');
const passengerDetail = document.querySelector('.passenger_detail_trav');
const budgetDetail = document.querySelector('.budget_detail');
const btn_filter = document.querySelector('.select_filter');
const filterDetail = document.querySelector('.filter_detail');

// toggle hiện đang bật
let activeToggle = null;

btn_trv.addEventListener("click",() => {
  ToggleDetail(passengerDetail);
})

btn_price.addEventListener('click', () => {
  ToggleDetail(budgetDetail);
})

btn_filter.addEventListener('click', () => {
  ToggleDetail(filterDetail);
})

function ToggleDetail(ele) {
  if (activeToggle === ele) {
    ele.classList.remove('details');
    activeToggle = null;
  } else {
    if (activeToggle) {
      activeToggle.classList.remove('details');
    }
    ele.classList.add('details');
    activeToggle = ele;
  }
}




