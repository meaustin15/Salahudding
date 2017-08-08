$(document).ready(function() {
    console.log('I show in the console on page load');
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

contshop.onclick = function() {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var choose;

$(function() {
    $( "#item1" ).click(function() {
        choose = 1;
        
    });

    $( "#item2" ).click(function() {
        choose = 1;
        
    });

    $( "#item3" ).click(function() {
        choose = 1;
        
    });

   
    $( "#add" ).click(function() {
        if(choose > 0) {
          $( "#addedtocart" ).toggle();
          $("#addedtocart").fadeOut("slow");
          $("#bdot").show();
          $("#carticon").show();
          choose = 0;
        }
    });
});


//CAROUSEL

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});
		