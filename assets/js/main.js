$("#join-waitlist").click(function() {
  $('html, body').animate({
      scrollTop: $("#contact-form").offset().top
  }, 700);
});
  
$("#to-top").click(function() {
  $('html, body').animate({
      scrollTop: $("body").offset().top
  }, 700);
});