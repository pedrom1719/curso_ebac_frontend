// Animate on Scroll
AOS.init();

$(document).ready(function(){

   // Accordion trigger
   $('.advantages__accordion__item__title i').click(function(){
      $(this).parents('.advantages__accordion__item').toggleClass('advantages__accordion__item--active');
   });

   // CountDown
   const eventDate = new Date('Jul 19, 2025 12:00:00').getTime();
   const countEnd = "<a href='#' class='hero__counter__button'>PEGAR MEU CONVITE</a>";
   
   const timeCount = setInterval(function(){

      const currentDate = new Date().getTime();
      const timeDiff = eventDate - currentDate;

      const daysMath = 1000 * 60  * 60 * 24;
      const hoursMath = 1000 * 60  * 60;
      const minutesMath = 1000 * 60;

      const daysCount = Math.floor(timeDiff / daysMath);
      const hoursCount = Math.floor((timeDiff % daysMath) / hoursMath);
      const minutesCount = Math.floor((timeDiff % hoursMath) / minutesMath);
      const secondsCount = Math.floor((timeDiff % minutesMath) / 1000);

      $('#days').children('strong').text(daysCount);
      $('#hours').children('strong').text(hoursCount);
      $('#minutes').children('strong').text(minutesCount);
      $('#seconds').children('strong').text(secondsCount);

      if(timeDiff < 0){
         clearInterval(timeCount);
         $('.hero__counter').html(countEnd);
      }

   }, 1000);

});