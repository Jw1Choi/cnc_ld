(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

})(jQuery);

$(function() {
  var targetDate = new Date();
  var today=new Date();
  var year = today.getFullYear();
  var month = today.getMonth()+1;
  var day = today.getDate();

  targetDate.setDate(targetDate.getDate() + 1);
  targetDate.setHours(0, 0, 0, 0);
  
  // 24-hour countdown
  var countDownDate = targetDate.getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
    // Get current time
    var now = new Date().getTime();
  
    // Find the distance between now and the countdown date
    var distance = countDownDate - now;
  
    // Calculate time units
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
    var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");
  
    // Output the result in an element with id="countdown"
    document.getElementById("day").innerHTML = year + ". " + month + ". " + day;
    document.getElementById("countdown").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
    document.getElementById("day1").innerHTML = year + ". " + month + ". " + day;
    document.getElementById("countdown1").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
    document.getElementById("day2").innerHTML = year + ". " + month + ". " + day;
    document.getElementById("countdown2").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
    // If the countdown is finished, start a new countdown for the next midnight
    if (distance < 0) {
      clearInterval(x);
      targetDate.setDate(targetDate.getDate() + 1);
      countDownDate = targetDate.getTime();
      x = setInterval(arguments.callee, 1000);
    }

  
  }, 1000);

    function upslide() {
        var h = $('#ticker').find('tbody > tr').outerHeight(); 
        
        var item = $('#ticker').find('tbody > tr:first-child'); 
        var itemClone = item.clone(); 
        $('#ticker > tbody').append(itemClone);
        
        $('#ticker_wrap').css({'top':0}).animate({'top': '-' + h +'px'}, function(){ 
            $('#ticker_wrap').css({'top': 0}); 
            item.remove(); 
        }); 
    }
    setInterval(function(){upslide()}, 1700);
  
  })

  