$(function(){
	var $a = $('#jnBrandTab ul li a');
	$a.first().addClass('selected');
	var $rollobj = $('#jnBrandList');
	var rollWidth = $rollobj.find('li').outerWidth();
	$a.on('click',function(){
		$(this).addClass('selected').parent().siblings().children().removeClass('selected');
		var nrollWidth = rollWidth * 4;
		var index = $a.index(this);
		$rollobj.stop(true,true).animate({
			left:-index * nrollWidth
		},2000)
		
	});
	return false;
})