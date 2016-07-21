$(function(){
	var $a = $('a.tooltip');
	$a.hover(function(e){
		this.tempTitle = this.title;
		this.title = '';
		this.$div = $('<div>' + this.tempTitle+ '</div>').appendTo('body');
		this.$div.offset({
			left: e.pageX + 20,
			top: e.pageY + 20
		})
	},function(){
		this.title = this.tempTitle;
		this.$div.remove();
	}).on('mousemove',function(e){
		this.$div.offset({
			left: e.pageX + 20,
			top: e.pageY + 20
		})
	});
})












// var $needTip = $("a.tooltip");
// 		$needTip.hover(function(e){
// 			this.tempTitle = this.title;
// 			this.title = '';
// 			var $tooltip = $('<div id="tooltip">'+ this.tempTitle +'</div>');
// 			$tooltip.appendTo('body').css({
// 				left: e.pageX + 20,
// 				top: e.pageY + 20
// 			}).show('fast');
// 		}, function(){
// 			this.title = this.tempTitle;
// 			$('#tooltip').remove();
// 		}).on('mousemove', function(e){
// 			$tooltip = $('#tooltip');
// 			$tooltip.css({
// 				left: e.pageX + 20,
// 				top: e.pageY + 20 
// 			})
// 		});