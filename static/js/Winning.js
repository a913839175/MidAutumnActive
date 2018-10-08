$(function(){
 		// var SHAKE_THRESHOLD = 3000;  
   //      var last_update = 0;  
   //      var x = y = z = last_x = last_y = last_z = 0;
   //      var audio = document.getElementById('musicBox');
   //      document.addEventListener("WeixinJSBridgeReady", function () {
   //          audio.load();        
   //      }, false);
 
   //      if (window.DeviceMotionEvent) {  
   //          window.addEventListener('devicemotion', deviceMotionHandler, false); 
   //      } else {  
   //          // alert('not support mobile event');  
   //      }    
   //      function deviceMotionHandler(eventData) {  
   //          var acceleration = eventData.accelerationIncludingGravity;  
   //          var curTime = new Date().getTime();  
   //          if ((curTime - last_update) > 100) {  
   //              var diffTime = curTime - last_update;  
   //              last_update = curTime;  
   //              x = acceleration.x;  
   //              y = acceleration.y;  
   //              z = acceleration.z;  
   //              var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;  
  
   //              if (speed > SHAKE_THRESHOLD) {  
   //                  audio.play();
   //              }  
   //              last_x = x;  
   //              last_y = y;  
   //              last_z = z;  
   //          }  
   //      }
   var sessiondata = JSON.parse(sessionStorage.getItem("data"));
   //³é½±
   function getPrize(){
        $.ajax({
            url: 'http://192.168.1.217:9900/game/getPrize/'+ sessiondata.playerId +'/1',
            dataType:'json',
            type : 'get',
            contentType: "application/json",
            success: function(data) {
                if(data.flag == true){
                    $.ajax({
                        url: 'http://192.168.1.217:9900/game/getPrize/'+ sessiondata.playerId +'/1',
                        dataType:'json',
                        type : 'get',
                        contentType: "application/json",
                        success: function(data) {
                            if(data.flag == true){
                                $('.failurepage').hide();
                                $('.Winnpage').show();
                                $('.Winning').hide();
                            }else{

                                $('.failurepage').show();
                                $('.Winnpage').hide();
                                $('.Winning').hide();
                            }   
                        } 
                    });
                    $('.failurepage').hide();
                    $('.Winnpage').show();
                    $('.Winning').hide();
                }else{
                    $('.failurepage').show();
                    $('.Winnpage').hide();
                    $('.Winning').hide();
                }   
            } 
        });
   }
   getPrize();
})