$(function(){
	var $li = $('#skin li')
	$li.on('click',function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var index = $li.index(this);
		var string = 'skin_' + index;
		$('#cssfile').attr('href','styles/skin/' + string + '.css');
	})
})