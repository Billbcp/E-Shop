$(function(){
	var $li = $('#jnDetails .color_change ul li');
	var $bli = $('ul.imgList > li');
	$li.on('click',function(){
		var attr = $(this).attr('class');
		$(this).addClass('selected').siblings().removeClass('selected');
		$bli.each(function(){
			$(this).addClass('hide');
			var clsName = $(this).attr('class');
			if(clsName.match(/\/attr\w+/g) == attr){
				$(this).removeClass('hide');
			}
			
		});
		
	});
})