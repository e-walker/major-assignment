$( document ).ready(function() {
    console.log( "ready" );

    $('.thinking').slideDown("450000");

	$( '.showMore' ).click(function( event ) {
		event.preventDefault();
	});

	$( '.Details').click(function(e) {
		$('.addressHours', e.currentTarget).show();
		$('.seeDetails', e.currentTarget).hide();
  	});

	$(function() {
    $( document ).tooltip();
  });



});
