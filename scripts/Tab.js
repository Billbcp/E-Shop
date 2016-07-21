$(function(){
	var $li = $('#jnProitem .tab .tab_menu ul li');
	var $div = $('#jnProitem .tab .tab_box div')
	$li.on('click',function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var index = $li.index(this);
		$div.eq(index).show().siblings().hide();
	});
	$li.on('mouseover',function(){
		$(this).addClass('hover').siblings().removeClass('hover');
	});
});