$(function(){
	$('.ibag').on('click',function(){
		window.location.href='Actkits.html'; 
	})
	$('.istart').on('click',function(){
		window.location.href='Game.html'; 
	});
    //获取URL参数
    var getUrlparam = function(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURI(r[2]);
        }
        return null;
    };
    var AppId = 'wx4ef34b984297b8f4';
    var code = getUrlparam('code');
    var local = window.location.href;
    var sessiondata=sessionStorage.getItem("data");
    if(code ==  null || code ===''){
    	   if(!sessiondata){
    	   		window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + AppId + '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
    	   }
    }else{
        getOpenId(code);
    }
	function getOpenId(code){
		$.ajax({
            url: 'http://192.168.1.217:9900/wechat/getUserInfo/'+ code,
            dataType:'json',
            type : 'get',
            success: function(data) {
                 console.log(data)
                 sessionStorage.setItem("data", JSON.stringify(data.data)); 
                 console.log(JSON.stringify(data.data))
            } 
        });
	}
})
