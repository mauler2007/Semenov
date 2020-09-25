
      $(document).ready(function() {
        //add email, phone, whatsApp, facebook, xing or linkedIn
        var config = {
          elements: {
            email:"mauler2007@gmail.com",
            phone: "+380637335583",
            facebook: "https://www.facebook.com/messages/t/andreysemenoff",
            instagramm: "instagram.com/andsemenov/",
            telegram: "https://t.me/SemenovAnd",
          },
          position: {
            right: "100px",
            bottom: "100px"
          }
        };
        buildContactButton(config);

        
      });
    
function buildContactButton(config){
   var idNames = [
     "firstButton", 
     "secondButton", 
     "thirdButton",
     "fourthButton", 
     "fifthButton", 
     "sixthButton", 
     "seventhButton" 
   ];
       var idNamesPointer = 0;
       var button = "";

          button = '<div id="contactButton" style="bottom:'+config.position["bottom"]+'; right:'+config.position["right"]+'">';
          if(Object.keys(config.elements).length > 1) {
  button += '<a id="shadow-element" class="contact-button shadow"><path d="M42.4342 0H24.9342C23.5592 0 22.4342 1.125 22.4342 2.5V25L29.9342 17.5H42.4342C43.8092 17.5 44.9342 16.375 44.9342 15V2.5C44.9342 1.125 43.8092 0 42.4342 0ZM40.5092 30.65L34.1592 29.925C33.4125 29.8373 32.6557 29.92 31.9456 30.1668C31.2355 30.4136 30.5905 30.8181 30.0592 31.35L25.4592 35.95C18.3622 32.3405 12.5936 26.572 8.98418 19.475L13.6092 14.85C14.6842 13.775 15.2092 12.275 15.0342 10.75L14.3092 4.45C14.1674 3.23044 13.5822 2.10559 12.6648 1.28962C11.7474 0.473646 10.562 0.0235408 9.33418 0.025H5.00918C2.18418 0.025 -0.165816 2.375 0.00918369 5.2C1.33418 26.55 18.4092 43.6 39.7342 44.925C42.5592 45.1 44.9092 42.75 44.9092 39.925V35.6C44.9342 33.075 43.0342 30.95 40.5092 30.65Z" fill="white"/></a>';
            button += '<a onclick="toggleUp(this)" style="background-color: #c40018" id="'+idNames[idNamesPointer]+'" class="main-button contact-button" role="button"><i class="menu-button" aria-hidden="true"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.4342 0H24.9342C23.5592 0 22.4342 1.125 22.4342 2.5V25L29.9342 17.5H42.4342C43.8092 17.5 44.9342 16.375 44.9342 15V2.5C44.9342 1.125 43.8092 0 42.4342 0ZM40.5092 30.65L34.1592 29.925C33.4125 29.8373 32.6557 29.92 31.9456 30.1668C31.2355 30.4136 30.5905 30.8181 30.0592 31.35L25.4592 35.95C18.3622 32.3405 12.5936 26.572 8.98418 19.475L13.6092 14.85C14.6842 13.775 15.2092 12.275 15.0342 10.75L14.3092 4.45C14.1674 3.23044 13.5822 2.10559 12.6648 1.28962C11.7474 0.473646 10.562 0.0235408 9.33418 0.025H5.00918C2.18418 0.025 -0.165816 2.375 0.00918369 5.2C1.33418 26.55 18.4092 43.6 39.7342 44.925C42.5592 45.1 44.9092 42.75 44.9092 39.925V35.6C44.9342 33.075 43.0342 30.95 40.5092 30.65Z" fill="white"/></svg></i><i class="fa fa-angle-down menu-button contact-button-out" aria-hidden="true"></i></a>';
            idNamesPointer++;
          }

          // if(config.elements["email"]) {
          //   button += '<a href="mailto:'+config.elements["email"]+'" style="background-color: #EF771E;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>';
          //   idNamesPointer++;
          // }

        

          if(config.elements["instagramm"]) {
            button += '<a target="blank" href="'+config.elements["instagramm"]+'" style="background-color: #ab00ae; " id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-instagram" aria-hidden="true"></i></a>';
            idNamesPointer++;
          }

          if(config.elements["facebook"]) {
            button +='<a target="blank"  href="'+config.elements["facebook"]+'" style="background-color: #3b5998;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-facebook" aria-hidden="true"></i></a>';
            idNamesPointer++;
          }

          if(config.elements["xing"]) {
            button += '<a target="blank"  href="'+config.elements["xing"]+'" style="background-color: #126567;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-xing" aria-hidden="true"></i></a>';
            idNamesPointer++;
          }

          if(config.elements["telegram"]) {
            button += '<a target="blank"  href="'+config.elements["telegram"]+'" style="background-color: #3dc1d0;;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-telegram" aria-hidden="true"></i></a>';
            idNamesPointer++;
          }

          if(config.elements["phone"]) {
            button += '<a href="tel:'+config.elements["phone"]+'" style="background-color: #888;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-phone" aria-hidden="true"></i></a>';
            idNamesPointer++;
          }

           button += '</div>'
          $(button).appendTo("body");
          $(".main-button").mouseover(function(){
            $("#shadow-element").css("box-shadow", "2px 2px 6px rgba(0,0,0,0.7)");
          });
          $(".main-button").mouseleave(function(){
            $("#shadow-element").css("box-shadow", "2px 2px 6px rgba(0,0,0,0.4)");
          });
        }

        function toggleUp(element) {
          $(".contact-button").toggleClass("up");
          $(".menu-button").toggleClass("contact-button-out");
        }



    