$(function(){
	var $a = $('#jnImageroll div a');
	var $img = $('#jnImageroll a img')
	$a.css('opacity','0.7');
	var index = 0;
	var timer;
	function changeImg(idx){
		$a.eq(idx).addClass('chos').css('opacity','1').siblings().removeClass('chos').css('opacity','0.7');
		$img.eq(idx).fadeIn().siblings().fadeOut();
	};
	$a.on('mouseover',function(){
		index = $(this).index();
		changeImg(index);
	}).eq(0).trigger('mouseover');
	function add(){
		timer = setInterval(function(){
			changeImg(index++%$a.length);
		},2000);
	}
	add();
	$('#jnImageroll').hover(function(){
		clearInterval(timer);
	},function(){
		add();
	});
})