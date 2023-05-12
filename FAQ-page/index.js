// Xử lý sự kiện hàm like , dislike 
function handleLikeDislikeClick(event) {
    const likeDislikeContainer = event.currentTarget;
    const likeButton = likeDislikeContainer.querySelector('.fa-thumbs-up');
    const dislikeButton = likeDislikeContainer.querySelector('.fa-thumbs-down');
    
    if (event.target === likeButton) {
        likeButton.parentElement.style.background = "rgba(211, 211, 211, 1)";
        dislikeButton.parentElement.style.background = "";
    } else if (event.target === dislikeButton) {
        dislikeButton.parentElement.style.background = "rgba(211, 211, 211, 1)";
        likeButton.parentElement.style.background = "";
    }
    
    const allContainers = document.querySelectorAll('.review');
    allContainers.forEach((container) => {
        if (container !== likeDislikeContainer) {
            container.querySelector('.fa-thumbs-up').parentElement.style.background = "";
            container.querySelector('.fa-thumbs-down').parentElement.style.background = "";
        }
    });
}

const likeDislikeContainers = document.querySelectorAll('.review');
likeDislikeContainers.forEach((container) => {
    container.addEventListener('click', handleLikeDislikeClick);
});


// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.getElementById("modalFAQ");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const fullName = formData.get("fullname");
  const email = formData.get("email");
  console.log(`Full Name: ${fullName}`);
  console.log(`Email: ${email}`);
  modal.style.display = "none";
});
