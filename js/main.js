$(document).ready(function () {



    $('.slider__box').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-next slick-arrow"><svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.12132" width="12" height="3" rx="1.5" transform="rotate(45 2.12132 0)" fill="#353434"/><rect x="10.6066" y="8.48523" width="12" height="3" rx="1.5" transform="rotate(135 10.6066 8.48523)" fill="#353434"/></svg></button>',
        prevArrow:'<button type="button" class="slick-prev slick-arrow"><svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="12" height="3" rx="1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 8.48528 0)" fill="#353434"/><rect width="12" height="3" rx="1.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 8.48523)" fill="#353434"/></svg></button>',
        dots:true,
        // fade: true,
        infinite: true,
        variableWidth: true,
        autoplay:true,
        autoplaySpeed:3000,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 3
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
      });


    // function buildContactButton(config){
    //   var idNames = [
    //     "firstButton", 
    //     "secondButton", 
    //     "thirdButton",
    //     "fourthButton", 
    //     "fifthButton", 
    //     "sixthButton", 
    //     "seventhButton" 
    //   ];
    //       var idNamesPointer = 0;
    //       var button = "";
    
    //           button = '<div id="contactButton" style="bottom:'+config.position["bottom"]+'; right:'+config.position["right"]+'">';
    //           if(Object.keys(config.elements).length > 1) {
    //   button += '<a id="shadow-element" class="contact-button shadow"></a>';
    //             button += '<a onclick="toggleUp(this)" style="background-color: #ee3b24" id="'+idNames[idNamesPointer]+'" class="main-button contact-button" role="button"><i class="fa fa-comments-o menu-button" aria-hidden="true"></i><i class="fa fa-angle-down menu-button contact-button-out" aria-hidden="true"></i></a>';
    //             idNamesPointer++;
    //           }
    
    //           if(config.elements["email"]) {
    //             button += '<a href="mailto:'+config.elements["email"]+'" style="background-color: #EF771E;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>';
    //             idNamesPointer++;
    //           }
    
    //           if(config.elements["phone"]) {
    //             button += '<a href="tel:'+config.elements["phone"]+'" style="background-color: #888;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-phone" aria-hidden="true"></i></a>';
    //             idNamesPointer++;
    //           }
    
    //           if(config.elements["whatsApp"]) {
    //             button += '<a target="blank" href="'+config.elements["whatsApp"]+'" style="background-color: #25d366;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>';
    //             idNamesPointer++;
    //           }
    
    //           if(config.elements["facebook"]) {
    //             button +='<a target="blank"  href="'+config.elements["facebook"]+'" style="background-color: #3b5998;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-facebook" aria-hidden="true"></i></a>';
    //             idNamesPointer++;
    //           }
    
    //           if(config.elements["xing"]) {
    //             button += '<a target="blank"  href="'+config.elements["xing"]+'" style="background-color: #126567;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-xing" aria-hidden="true"></i></a>';
    //             idNamesPointer++;
    //           }
    
    //           if(config.elements["linkedIn"]) {
    //             button += '<a target="blank"  href="'+config.elements["linkedIn"]+'" style="background-color: #0e76a8;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-linkedin" aria-hidden="true"></i></a>';
    //             idNamesPointer++;
    //           }
    //           button += '</div>'
    //           $(button).appendTo("body");
    //           $(".main-button").mouseover(function(){
    //             $("#shadow-element").css("box-shadow", "2px 2px 6px rgba(0,0,0,0.7)");
    //           });
    //           $(".main-button").mouseleave(function(){
    //             $("#shadow-element").css("box-shadow", "2px 2px 6px rgba(0,0,0,0.4)");
    //           });
    //         }
    
    //         function toggleUp(element) {
    //           $(".contact-button").toggleClass("up");
    //           $(".menu-button").toggleClass("contact-button-out");
    //         }
    

  $('.header__menu-btn').on('click', function(){
    $('.header__menu').toggleClass('is-active')
  });


 

    //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
    
    
  
  $('.reviews__more-btn').on('click', function(e){
      e.preventDefault;
      $('.reviews__inner').toggleClass('reviews__active');
      $(".reviews__slider").slick('reinit');
      
  });

  $('.reviews__close-btn').on('click', function(e){
    e.preventDefault;
      $('.reviews__inner').toggleClass('reviews__active');
      
  });



 

  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    arrows: true ,
    dots:true,
    nextArrow:'<button type="button" class="slick-next slick-arrow"><svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.12132" width="12" height="3" rx="1.5" transform="rotate(45 2.12132 0)" fill="#353434"/><rect x="10.6066" y="8.48523" width="12" height="3" rx="1.5" transform="rotate(135 10.6066 8.48523)" fill="#353434"/></svg></button>',
    prevArrow:'<button type="button" class="slick-prev slick-arrow"><svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="12" height="3" rx="1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 8.48528 0)" fill="#353434"/><rect width="12" height="3" rx="1.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 8.48523)" fill="#353434"/></svg></button>',
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
          responsive: [
          {
            breakpoint: 576,
            settings: {
              arrows: false,
            }
          },
          // {
          //   breakpoint: 480,
          //   settings: {
          //     arrows: false,
          //     centerMode: true,
          //     centerPadding: '40px',
          //     slidesToShow: 1
          //   }
          // }
        ]
  });

  new WOW().init();

  function setProgress(index) {
  const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

  $progressBar
    .css('background-size', `${calc}% 100%`)
    .attr('aria-valuenow', calc);

  $progressBarLabel.text(`${calc.toFixed(2)}% completed`);
}

const $slider = $('.slider__box');
const $progressBar = $('.progress');
const $progressBarLabel = $('.slider__label');

$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
  setProgress(nextSlide);
});

$slider.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 400,
});  

setProgress(0);

   



});