$(function(){
	var $sa = $('ul.imgList > li a');
	$sa.on('click',function(){
		var sname = $(this).find('img').attr('src');
		var i = sname.lastIndexOf('.');
		var first = sname.substring(0,i);
		var sImg = first + '_small' + '.jpg';
		$('#bigImg').attr('src',sImg);
	});	
});