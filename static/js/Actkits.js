$(function(){
	//活动 说明排行榜奖品 之间的切换
	$('.poupTitleMune').on('click',function(){
		var index = $(this).index();
		var clas = ".poupMain" + index
		$('.poupMain').hide();
		$(clas).show();
		if(index == 0){
			$('.slideBarTip').css('left','0.6rem');
		}else if(index == 1){
			$('.slideBarTip').css('left','5.01667rem');
		}else if(index == 2){
			$('.slideBarTip').css('left','9.43333rem');	
		}
	})
	//兑换券复制
	var clipboard = new Clipboard('.copy');
    clipboard.on('success', function(e) {   	
    	alert('☺复制成功，可通过Ctrl+V进行粘贴!');
    });
    clipboard.on('error', function(e) {	
	    alert('😐复制失败，请选择手动Ctrl+C复制!',false);
	});
	//关注我们弹出二维码
	$('.menuBtnBox').on('click',function(){
		$('.masklayer').show();
	})
	//关注我们关闭二维码
	$('.maskClose').on('click',function(){
		$('.masklayer').hide();
	})
	//弹出奖品的详情
	$('.codeInfoBox').on('click',function(){
		$('#awardDetailBox').show()
	})
	//关闭奖品的详情
	$('.awardCloseIcon').on('click',function(){
		$('#awardDetailBox').hide()
	})

	$('.Closeone').on('click',function(){
		console.log(11)
		window.location.href='index.html'
	})
})