// jQuery('document').ready(function(){
	// jQuery("body").append('<a href="http://www.google.ru">Go_to_google</a>');
	// jQuery("p").remove(); удалить этот тэг

	// var p_clone;
	// p_clon = jQuery('p').clone();
	// jQuery('body').append(p_clon);

	// var p_clone;
	// p_clon = jQuery('p').clone();
	// jQuery('body').append(p_clon);

	// var p_clone;
	// p_clon = jQuery('p').clone();
	// jQuery('body').append(p_clon);

	// var ka1, ka2;
	// ka1 = 3;
	// ka2 = 4;
	// alert( Math.sqrt( (ka1 * ka1) + (ka2 * ka2) ) );

// });

jQuery('document').ready(function(){

	jQuery('input').on('keyup',function(){

		var value1, value2, value3, value4;
		value1 = jQuery('#val1').val();
		value2 = jQuery('#val2').val();

		value1 = parseInt(value1) * parseInt(value1);
		value2 = parseInt(value2) * parseInt(value2);

		value3 = value1 + value2;

		value4 = Math.sqrt(value3)
		
		jQuery('#sum1').html(value4);

	});

});
