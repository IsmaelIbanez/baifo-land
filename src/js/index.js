let slides = document.querySelectorAll('.mySlides');
let dots = document.querySelectorAll('.dot');
let slideIndex = 1;
let timeoutID;

const showSlides = (n) => {
    let i;

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < slides.length; i++) {
        dots[i].setAttribute('class', 'dot');
    }


    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].setAttribute('class', 'dot active');
    clearTimeout(timeoutID);
    timeoutID = setTimeout(autoSlides, 5000);
};

const plusSlides = (n) => {
    showSlides(slideIndex += n);
};

const currentSlide = (n) => {
    showSlides(slideIndex = n);
};

const autoSlides = () => {
    let i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < slides.length; i++) {
        dots[i].setAttribute('class', 'dot');
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].setAttribute('class', 'dot active');
    timeoutID = setTimeout(autoSlides, 5000);
}

autoSlides();

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
  
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
  
    // Check if there are any navbar burgers
  
    if ($navbarBurgers.length > 0) {
  
  
      // Add a click event on each of them
  
      $navbarBurgers.forEach( el => {
  
        el.addEventListener('click', () => { 
  
          // Get the target from the "data-target" attribute
  
          const target = el.dataset.target;
  
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  
          el.classList.toggle('is-active');
  
          $target.classList.toggle('is-active');
  
        });
  
      });
  
    }
  
  });

  var stripe = Stripe("pk_test_51IdHvTHy6yeJaL9kFIfKq6D30x1slhxNU1tSwVPvJaywOPrh43FqSrcpts9JlfvsDCmciO0TIcFiwUgFAKtn5bSy001kHlKiCi");
  var checkoutButton = document.getElementById("checkout-button");
  checkoutButton.addEventListener("click", function () {
    stripe.redirectToCheckout({ 
        
        items: [{price:'price_1IgSNSHy6yeJaL9kRXStnHD3',quantity: 1}],
        

    })
        .then(function (result) {
        // If redirectToCheckout fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using error.message.
        if (result.error) {
          alert(result.error.message);
        }
    })
      .catch(function (error) {
        console.error("Error:", error);
      })
    });

$('#navbar-btn').click(function() {
$('#navbar').toggle();
});