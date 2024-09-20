  const navLinks = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.pathname; 
  

  navLinks.forEach(link => {
        if ('/'+link.getAttribute("href") ===  currentUrl) {
            link.style.color = "#fed700";  
        } 
  });


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




  $(document).ready(function() {
    // Show all cards initially
    $('.cards').show();
  
    // Show/hide cards based on dropdown selection
    $('#vegetable-select').change(function() {
      var selectedOption = $(this).val();
  
      // Hide all cards first
      $('.cards').hide();
  
      if (selectedOption === 'all') {
        // Show all cards if 'Show All' is selected
        $('.cards').show();
      } else {
        // Show cards based on selected option
        $('.' + selectedOption).show();
      }
    });
  });




  

//   function changeUrl(newUrl) {
//     window.history.pushState({ path: newUrl }, '', newUrl);
// }

//   $(document).ready(function() {
//     // Example: change URL when clicking a button
    
//     if (window.location.pathname === '/') {
//         changeUrl('/');
//     }
//      else if (window.location.pathname === 'index.html') {
//         changeUrl('/');
//     }else if (window.location.pathname === 'about.html') {
//         changeUrl('/about');
//     }
//     else if (window.location.pathname === 'contact.html') {
//         changeUrl('/contact-us');
//     }
//     else if (window.location.pathname === 'product.html') {
//         changeUrl('/product');
//     }
// });



// hide the inspect menu from browser developer tools 
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });
// document.addEventListener('keydown', function(e) {
//   // F12
//   if (e.key === 'F12') {
//       e.preventDefault();
//   }
//   // Ctrl+Shift+I
//   if (e.ctrlKey && e.shiftKey && e.key === 'I') {
//       e.preventDefault();
//   }
//   // Ctrl+Shift+C (Inspect Element)
//   if (e.ctrlKey && e.shiftKey && e.key === 'C') {
//       e.preventDefault();
//   }
//   // Ctrl+Shift+J (Open Console)
//   if (e.ctrlKey && e.shiftKey && e.key === 'J') {
//       e.preventDefault();
//   }
// });







  



