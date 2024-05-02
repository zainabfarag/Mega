const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })

  function toggleSubNav() {
    var dropdownMenu = document.getElementById("navbarDropdown1").nextElementSibling;
    dropdownMenu.classList.toggle("show");
  }
  
  // ---------------------loadingScreen-------------------------

$(document).ready(function () {
    $(".loadingDiv").fadeOut(1000)
    $("body").css("overflow", "auto")
})

// ----------------------------------------------------
// $(".home-carousel1 , .home-carousel2 , .home-carousel3").ready(function() {
//     $(".move").show(1000 , function(){
//     $(".p-move").show(2000 , function(){
//         $(".b-move").fadeIn(4000)
//     })
// })})

// $(".home-carousel1 , .home-carousel2 , .home-carousel3").ready(function() {
//     $(".move").animate({ marginLeft: "0%" }, 1000) , function(){
//         $(".p-move").animate({ marginLeft: "-30px" }, 2000 , function(){
//             $(".b-move").fadeIn(4000)
//         })
//     };
//   });
  
 


// ------------------------slider---------------------
$('.home-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    transitionStyle: 'fade',
    responsive: {
        0: {
            items: 1
        },
       
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
$('.Teem-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    items: 4,
    loop: true,
    nav: false,
    dots: false,
    transitionStyle: 'fade',
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('.products-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    transitionStyle: 'fade',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});

$('.client-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    items: 6,
    loop: true,
    nav: false,
    dots: false,
    transitionStyle: 'fade',
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }

});

$(window).scroll(function() {
 if( $(window).scrollTop() <= 150){
$(".to-up").css("display", "none")
 }else{
    $(".to-up").css("display", "block")

 }
  });













































$('.owl-carousel , .NEWS-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})