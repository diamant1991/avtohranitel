
jQuery(function($){
     $(".in-1").mask("+9");
     $(".in-3").mask("999-99-99");
});

function testJump(x){
    var ml = ~~x.getAttribute('maxlength');
    if(ml && x.value.length >= ml){
        do{
            x = x.nextSibling;
        }
        while(x && !(/text/.test(x.type)));
        if(x && /text/.test(x.type)){
            x.focus();
        }
    }
}


	// Select
$('.slct').click(function(){
	
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(150);

		$(this).addClass('active');

		$('.drop').find('li').click(function(){

			var selectResult = $(this).html();

			$(this).parent().parent().find('input').val(selectResult);

			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			dropBlock.slideUp(150);
		});

	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(150);
	}
	return false;
});

$(document).mouseup(function (e) {
    var container = $(".drop");
    if (container.has(e.target).length === 0){
        container.slideUp(150);
        $('.slct').removeClass('active');
    }
});



$(document).ready(function () {
	$('input,textarea').focus(function(){
	  $(this).data('placeholder',$(this).attr('placeholder'))
	  $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	  $(this).attr('placeholder',$(this).data('placeholder'));
	});

  $(".in-1").val('+7');


	$('.city-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('#cities').fadeIn(400);
  })
	$('.get-call-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('#get-call').fadeIn(400);
  })
	$('.ques-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('#get-ques').fadeIn(400);
  })
	$('.privacy-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('#privacy').fadeIn(400);
  })
	$('.pvz-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('#pvz').fadeIn(400);
  })
	$('.payment-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('#payment').fadeIn(400);
  })
	$('.delivery-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('#delivery').fadeIn(400);
  })
	$('.post-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('#post').fadeIn(400);
  })
	$('.express-link').click(function(){
  	 $('.form-mask').fadeIn(400);
  	 $('#express').fadeIn(400);
  })


	$('.close-btn,.form-mask,.close-link').click(function(){
  	 $('.modal,.form-mask').fadeOut(400);
  })
	$(document).keyup(function(d) {
	    if (d.keyCode == 27) {
	        $('.form-mask').fadeOut(400);
	        $('.modal').fadeOut(400);
	    }
	});

	$("a.toplink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top - 38
      }, {
         duration: 1000,
         easing: "swing"
      });
      return false;
   });

  
   $('.expand-link').each(function() {
      var lengthDiv = $(this).parent().find('.item-desc-toggle p').text()
      if(lengthDiv.length > 340){
         $(this).show();
      }
      else{
         $(this).hide();
      }
   });   

   $('.expand').click(function() {
      var toggle = $(this).parent().parent().find('.item-desc-toggle')
      if(toggle.css('height') == '60px'){
         toggle.addClass('toggle-height');
         $(this).text('Свернуть')
      }
      else{
         toggle.removeClass('toggle-height');
         $(this).text('Развернуть полностью')
      }
     
   });

   /*console.log($('#test p').text().length)*/

});



