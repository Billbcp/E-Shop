$(function(){
	var $a = $('ul.rating li a');
	$a.on('click',function(){
		var title = $(this).attr("title");
		alert('您给此商品的评分是' + title);
		var cl = $(this).parent().attr('class');
		$(this).parent().parent().removeClass().addClass('rating' + ' ' + cl + 'star')
		return false;
	});
});