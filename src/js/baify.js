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
  
  (function() {
    var stripe = Stripe('pk_test_51IdHvTHy6yeJaL9kFIfKq6D30x1slhxNU1tSwVPvJaywOPrh43FqSrcpts9JlfvsDCmciO0TIcFiwUgFAKtn5bSy001kHlKiCi');
  
    var checkoutButton = document.getElementById('checkout-button-price_1IgSNSHy6yeJaL9kRXStnHD3');
    checkoutButton.addEventListener('click', function () {
      /*
        * When the customer clicks on the button, redirect
        * them to Checkout.
        */
      stripe.redirectToCheckout({
        lineItems: [{price: 'price_1IgSNSHy6yeJaL9kRXStnHD3', quantity: 1}],
        mode: 'payment',
        /*
          * Do not rely on the redirect to the successUrl for fulfilling
          * purchases, customers may not always reach the success_url after
          * a successful payment.
          * Instead use one of the strategies described in
          * https://stripe.com/docs/payments/checkout/fulfill-orders
          */
        successUrl: 'https://baify.netlify.app/',
        cancelUrl: 'https://baify.netlify.app/',
      })
      .then(function (result) {
        if (result.error) {
          /*
            * If `redirectToCheckout` fails due to a browser or network
            * error, display the localized error message to your customer.
            */
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    });
  })();

$('#navbar-btn').click(function() {
$('#navbar').toggle();
});