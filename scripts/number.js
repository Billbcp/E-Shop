$(function(){
	var $strong = $('.pro_price strong');
	var price = $strong.text();
	$('#num_sort').change(function(){
		var num = $(this).val();
		var amount = num * price;
		$strong.text(amount);
	});
})