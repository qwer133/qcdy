$(function(){
         
    var move;  
    function  souSuo(){
      $(".footer .row").css({"display":"block"});  
      move=$("#txt").val();
      $.ajax({
          url:"https://op.juhe.cn/onebox/movie/video?key=78149db5a930d0904f82b8a7780bea5a&q="+move,
          dataType:"jsonp",
          success:function(data){
              if(data.reason=="查询不到该影片相关信息"){
                 alert("亲，查询不到该影片哦");
              };
           
             var obj=data.result;
            
              var resulta=template("template",obj);
            
              $(".contents").html(resulta);
              tg();
              

          },
          beforeSend:function(){
               if($("#txt").val()==""){
                  alert("请输入影片名");
                  return false;
              };
          }
      })
     }




   $.ajax({
          url:"https://api.map.baidu.com/location/ip?ip=&ak=FKEcS7dkGGM55rdeZZvObjQSi4ANM1dq&coor=",
          dataType:"jsonp",
          success:function(data){
             var obj5=data.content;
              var resulta1=template("template2",obj5);
              $("#city1").html(resulta1);
              

          }
   })

   setTimeout(function(){
       var city=$("#city1 p").text();
       function wea(){
       $.ajax({
          url:"https://www.apiopen.top/weatherApi?city="+city,
          dataType:"json",
          success:function(data){
             var obj1=data.data;
              var resulta1=template("template1",obj1);
              $(".hcc").html(resulta1);
              

          }
      })
   }

   wea();
 },2000);
  
   
  function  tg(){
        $(".movietuijian li").click(function(){
                 // alert("1");
                  $("#txt").val($(this).children("p").text());
                  $.ajax({
                      url:"https://op.juhe.cn/onebox/movie/video?key=78149db5a930d0904f82b8a7780bea5a&q="+$("#txt").val(),
                      dataType:"jsonp",
                      success:function(data){
                       
                          if(data.reason=="查询不到该影片相关信息"){
                          alert("亲，查询不到该影片哦");
                          };
                          var obj=data.result;
                          var resulta=template("template",obj);
        
                          $(".contents").html(resulta);
                          tg();

                      }
                   })
              });
  }

  $("#btn1").click(function(){
     souSuo();
     $("body").removeClass("bla");
     $(".css3").css("display","none");
     $(".css4").css({"display":"none","height":"0px"});
     $(".css5").css("display","none");
     $(".p1").css("display","none");
     $(".hcenter").css("border","1px solid green");
     $(".hcenter").css("color","black");
     $(".hcenter #qhcc").css("color","black");

  });
  var num=1; 
  $(".ppt").click(function(){
       num++;
       if(num%2==0){
          $("body").addClass("yel");
          $("body").removeClass("whi");
          $(this).text("护眼关");
       }else{
          $("body").addClass("whi");
          $("body").removeClass("yel");
          $(this).text("护眼开");
       }
  });

 $(document).keyup(function(e){
         if(e.keyCode==13)
         {

                  if($("#input1").val()=="")
              {
                  alert("请输入电影名称");
              }else{
                   souSuo();
                   $("body").removeClass("bla");
                   $(".css3").css("display","none");
                   $(".css4").css({"display":"none","height":"0px"});
                   $(".css5").css("display","none");
                   $(".p1").css("display","none");
                   $(".hcenter").css("border","1px solid green");
                   $(".hcenter").css("color","black");
                   $(".hcenter #qhcc").css("color","black");
              };
         }

     });
  var td=0;
  setInterval(function(){
  td=td+2000;
  if(td>1000){
      td=2000;
  }
  var myDate = new Date();
  var n=myDate.getYear(); 
  var y=myDate.getMonth(); 
  var r=myDate.getDate(); 
  var x=myDate.getDay(); 
  switch(x)
  {
      case 0: x="日"; break;
      case 1: x="一"; break;
      case 2: x="二"; break;
      case 3: x="三"; break;
      case 4: x="四"; break;
      case 5: x="五"; break;
      default: x="六"; 

  }
  $(".hcr .hcrs").text((n-100)+"/"+(y+1)+"/"+r+"/"+x); 



  },td);

 var tt=0;
  setInterval(function(){
  tt=tt+1000;
  if(tt>1000){
      tt=1000;
  }
  var dateTime=new Date();
  var hh=dateTime.getHours();
  var mm=dateTime.getMinutes();
  var ss=dateTime.getSeconds();
  mm = extra(mm);
  ss = extra(ss);

  $(".hcr .hcrx").text(hh+":"+mm+":"+ss); 

  },tt);


  function extra(x)
  {
      if(x < 10)
      {
          return "0" + x;
      }
      else
      {
          return x;
      }
  }

var timer=new Date();
var getTime=timer.getHours()
if(getTime>=0&&getTime<=6){
  getTime=1;
}else if(getTime>6&&getTime<=12){
  getTime=2;
}else if(getTime>12&&getTime<=18){
  getTime=3;
}else if(getTime>18&&getTime<24){
  getTime=4;
}
switch(getTime)
{
  case 1: $("#bgm source")[0].src="music/bgm1.mp3";    $("#bgm").get(0).load(); break;
  case 2: $("#bgm source")[0].src="music/3.mp3";    $("#bgm").get(0).load(); break;
  case 3: $("#bgm source")[0].src="music/4.mp3";   $("#bgm").get(0).load(); break;
  default: $("#bgm source")[0].src="music/2.mp3";  $("#bgm").get(0).load(); 

}
  var time=20;
  if(time==20){
   
      $("#bgm").get(0).play();
      var index = setInterval(function(){
          time--;
          if (time==0) {
              $("#bgm").get(0).pause();
              clearInterval(index);
          }
      },1000);

  }
var time=10;

var wid=$(".p1").width();
//alert(wid);
if(time==10){
  var index = setInterval(function(){
      time--;
      wid=wid+30;
      $(".p1").width(wid);
      if (time==0) {
          $(".p1").width(300);
          clearInterval(index);
      }
  },10);

}
setTimeout(function(){
  $(".css4").slideDown("slow");
},2000);
setTimeout(function(){
  $(".css5").addClass("css6");
},2400);
setTimeout(function(){
  $(".css5 .li").addClass("css8");
},3000);

setTimeout(function(){
  $(".css5 .li").addClass("css7");
},3500);
setTimeout(function(){
    $(".hcenter").fadeIn();
},4000);

})
