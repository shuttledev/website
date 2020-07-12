// let nCount = selector => {
//   $(selector).each(function () {
//     $(this)
//       .animate({
//         Counter: $(this).text()
//       }, {
//         // A string or number determining how long the animation will run.
//         duration: 4000,
//         // A string indicating which easing function to use for the transition.
//         easing: "swing",
//         /**
//          * A function to be called for each animated property of each animated element. 
//          * This function provides an opportunity to
//          *  modify the Tween object to change the value of the property before it is set.
//          */
//         step: function (value) {
//           $(this).text(Math.ceil(value));
//         }
//       });
//   });
// };

// let a = 0;
// $(window).scroll(function () {
//   // The .offset() method allows us to retrieve the current position of an element  relative to the document
//   let oTop = $(".numbers").offset().top - window.innerHeight;
//   if (a == 0 && $(window).scrollTop() >= oTop) {
//     a++;
//     nCount(".rect > h1");
//   }
// });

// var message = "";

// $("#sendMessage").on("click", function () {
//     message = $("#contactform").serialize();
//     $.ajax({
//         url: "https://formspree.io/mpzyozqv",
//         method: "POST",
//         data: { message: message },
//         dataType: "json"
//     });
//     alert('Thanks for the email, we\'ll be in touch promptly.');
//     return false;
// });

//https://formspree.io/mpzyozqv

// /**
//  *
//  *  sticky navigation
//  *
//  */

// let navbar = $(".navbar");

// $(window).scroll(function () {
//   // get the complete hight of window
//   let oTop = $(".section-2").offset().top - window.innerHeight;
//   if ($(window).scrollTop() > oTop) {
//     navbar.addClass("sticky");
//   } else {
//     navbar.removeClass("sticky");
//   }
// });

/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict


