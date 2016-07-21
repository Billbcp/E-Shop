$(function(){
	var $li = $('.pro_size ul li');
	var $strong = $('.pro_size strong')
	$li.on('click',function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		$strong.html(this.innerHTML) 
	});
});