$(function(){
	var $smallpic = $('<div></div>').appendTo($('#tempDiv'));
	// var $bigpic = $('<div></div>').appendTo($('#jnProitem'));
	$('#tempDiv').css({
		width: 310,
		height: 310,
		background: 'blue',
		opacity: 0,
		position: 'absolute',
		top: 0,
		left: 0
	}).hover(function(){
			$smallpic.css({
			width: 100,
			height: 100,
			position: 'absolute',
			top:0,
			left:0,
			// opacity: 0.5,
			background: 'red',
			zIndex: 99999
		})
		// 	$bigpic.css({
		// 	width: 350,
		// 	height: 350,
		// 	position: 'absolute',
		// 	left: $('#bigImg').offset().left + 20,
		// 	top: 0,
		// 	background: '#fff',
		// 	opacity:0.3
		// })
	},function(){

	}).on('mousemove',function(){

	})
})

































// $(function(){
// 		var $bigImg = $('#jnProitem > div.jqzoomWrap');
// 		var $tempDiv = $('#tempDiv');
// 		$tempDiv.css({
// 			width: 310,
// 			height: 310,
// 			background: '#f00',
// 			opacity: 0,
// 			position: 'absolute',
// 			left: 0,
// 			top: 0,
// 			zIndex: 9999
// 		})
// 		$tempDiv.on('mouseenter', function(){
// 			this.$picFrame = $('<div class="picFrame"></div>')
// 			this.$bigPic = $('<div class="bigPic"><img></img><div>');
// 			this.$picFrame.appendTo($bigImg).css({
// 				position: 'absolute',
// 				width: 100,
// 				height: 100,
// 				background: '#fff',
// 				opacity: 0.5,
// 			})
// 			this.$bigPic.appendTo($bigImg).css({
// 				overflow: 'hidden',
// 				position: 'absolute',
// 				width: 350,
// 				height: 350,
// 				top: 0,
// 				left: $bigImg.innerWidth()+10
// 			});
// 			var bigImgSrc = $('#bigImg').attr('src');
// 			var newImgSrc = bigImgSrc.replace('_small', '_big');
// 			this.$bigPic.children('img').attr('src', newImgSrc);
// 		}).on('mouseout', function(){
// 			this.$picFrame.remove();
// 			this.$bigPic.remove();
// 		}).on('mousemove',function(e){
// 			var iLeft = e.pageX - this.$picFrame.width()/2;
// 			var iTop = e.pageY - this.$picFrame.height()/2;
// 			var iOffsetTop = $bigImg.offset().top;
// 			var iOffsetLeft = $bigImg.offset().left;
// 			var iFrameHeight = this.$picFrame.height();
// 			var iFrameWidth = this.$picFrame.width();
// 			if(iTop<iOffsetTop){
// 				iTop = iOffsetTop;
// 			}
// 			if(iTop>$bigImg.height()+iOffsetTop-iFrameHeight){
// 				iTop = $bigImg.height()+iOffsetTop-iFrameHeight;
// 			}
// 			if(iLeft<iOffsetLeft){
// 				iLeft = iOffsetLeft;
// 			}
// 			if(iLeft>$bigImg.width()+iOffsetLeft-iFrameWidth){
// 				iLeft = $bigImg.width()+iOffsetLeft-iFrameWidth;
// 			}
// 			this.$picFrame.offset({
// 				left: iLeft,
// 				top: iTop
// 			});
// 			var iSacleX = this.$picFrame.position().left / ($bigImg.width() - iFrameWidth);
// 			var iSacleY = this.$picFrame.position().top / ($bigImg.height() - iFrameHeight);
// 			var iBigImgMoveWidth = this.$bigPic.find('img').width() - this.$bigPic.width();
// 			var iBigImgMoveHeight = this.$bigPic.find('img').height() - this.$bigPic.height();
// 			this.$bigPic.children('img').css({
// 				position: 'absolute',
// 				left: -iSacleX * iBigImgMoveWidth,
// 				top: -iSacleY * iBigImgMoveHeight
// 			});
// 		})
// })