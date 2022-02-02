var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5.8,
  spaceBetween: 30,
  grabCursor: true,
});
//=========================================================
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    600
  );
});
//==========================================================


var selector = '.menu-link';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});