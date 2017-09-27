	var facebookLike = document.getElementById("facebookLike");
	
	if( jQuery( facebookLike ).length ){
		facebookLike.setAttribute("fb:like:layout", "button_count");
		facebookLike.setAttribute("fb:like:show_faces", "false");
		facebookLike.setAttribute("fb:like:width", "100");
		facebookLike.setAttribute("fb:like:action", "like");
		facebookLike.setAttribute("fb:like:font", "tahoma");
		facebookLike.setAttribute("fb:like:colorscheme", "light");
	}
	
	var plusone = document.getElementById("plusone");
	if( jQuery( plusone ).length ){
		plusone.setAttribute("g:plusone:size", "medium");
		plusone.setAttribute("g:plusone:lang", "it-IT");
		plusone.setAttribute("g:plusone:width", "100");
	}