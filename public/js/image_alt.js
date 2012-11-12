$(document).ready(function(){
	$("#posts img").each(function(i){
		if ($(this).attr("alt").length) {
			$(this).after("<div class=\"image-footnote\">" + $(this).attr("alt") + "</div>");
		}
	});
});