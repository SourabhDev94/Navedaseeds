// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(29.6803266, 76.9896254),
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


//  -----------------Jquery-------------------------------------------- 
// to get the reload logo Animation
// $(document).ready(function() {


//     $(".logo-container .logo").delay(1000).fadeOut(1000, function() {
//       $(".logo-container").hide();
//       $(".homepage").fadeIn(1000);
//     });

// });



// to get form data on Email

$(document).ready(function() {
    $("#contact-form").submit(function(e) {
      e.preventDefault(); // Prevent the default form submission
  
      // Get form data
      var formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        message: $("#message").val()
      };
  
      // Construct the mailto URL with form data
      var email = "sourabhkumar103@gmail.com"; // Replace with your email address
      var subject = "New Contact Form Submission";
      var body = "Name: " + formData.name + "%0D%0A" +
                 "Email: " + formData.email + "%0D%0A" +
                 "Phone Number: " + formData.phone + "%0D%0A" +
                 "Message: " + formData.message;
      var mailtoUrl = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  
      // Open the user's email client to send the email
      window.location.href = mailtoUrl;
    });
  });



  
  $(document).ready(function() {
    var images = $('.hero-section .image');
    var currentImage = 0;
    var duration = 3000; // 3 seconds
  
    // Show the first image initially
    $(images[currentImage]).fadeIn(0);
  
    function showNextImage() {
      $(images[currentImage]).fadeOut(0, function() {
        currentImage = (currentImage + 1) % images.length;
        $(images[currentImage]).fadeIn(0, function() {
          setTimeout(showNextImage, duration);
        });
      });
    }
  
    setTimeout(showNextImage, duration);
  });





