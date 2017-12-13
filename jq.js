$(document).ready(function(){
    $(".smooth-scroll").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 120
        }, 800, function(e){
          window.location.hash = hash;
          $('html, body').scrollTop($(hash).offset().top - 120);
        });
      }
    });
  });