!function(t){function i(o){if(s[o])return s[o].exports;var a=s[o]={exports:{},id:o,loaded:!1};return t[o].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}var s={};return i.m=t,i.c=s,i.p="",i(0)}([function(t,i){"use strict";!function(){var t=function(){return this.init(),this};t.prototype={init:function(){var t='<div class="toobar"><ul class="toobar-top contact-right"><li class="toobar-item"><a target="_blank" trackevtid="W_SY_GG_2_0001" href="http://www.jyall.com/public/jytools.html"><b class="kf"></b></a><div class="toobar-fix" style="display: none; opacity: 0; right: 100px;"><div><span>家园工具</span><img src="http://static.jyall.com/jyall_shop/dest/home/images/toobar-right.png"></div></div></li><li class="toobar-item t-bg j-touchgold" trackevtid="W_SY_GG_2_0002"><a href="javascript:;"><b class="logo"></b></a><span>联系金管家</span></li></ul><ul class="toobar-bottom"><li class="toobar-item"><a target="_blank" trackevtid="W_SY_GG_2_0004" href="http://home.jyall.com/userHomeIndex.html"><b class="wd"></b></a><div class="toobar-fix" style="display: none; opacity: 0; right: 100px;"><div><span>我的家园</span><img src="http://static.jyall.com/jyall_shop/dest/home/images/toobar-right.png"></div></div></li><li class="toobar-item t-cart"><a target="_blank" trackevtid="W_SY_GG_2_0003" href="http://cart.jyall.com/cart.html"><b class="gw"></b><div class="cart-num"></div></a></li><li class="toobar-item toobar-code"><a href="javascript:;"><b class="sj"></b></a><div class="toobar-fix" style="display: none; opacity: 0; right: 100px;"><div><div class="toobar-code-img"><div class="qr-code"><img src="http://static.jyall.com/jyall_shop/dest/home/images/app100x100.jpg" class="code-img" /><img src="http://static.jyall.com/jyall_shop/dest/home/images/code.gif" class="gif-img" /><div>下载APP<br>注册有惊喜</div></div></div></div></div></li><li class="toobar-item"><a href="javascript:;"><b class="top"></b></a><div class="toobar-fix" style="display: none; opacity: 0; right: 100px;"><div><span>返回顶部</span><img src="http://static.jyall.com/jyall_shop/dest/home/images/toobar-right.png"></div></div></li></ul></div>';$(document.body).append(t),this.evt(),new i},evt:function(){$(".groom-list li").each(function(t,i){t%6===5&&$(i).css({width:"199px"})}),$(document.body).on("click",".top",function(){$("html,body").animate({scrollTop:0},500)});var t;$(".toobar-item").hover(function(){t&&clearTimeout(t);var i=$(this);t=setTimeout(function(){i.find(".toobar-fix").show().animate({right:"35px",opacity:1,filter:"alpha(opacity=100)"},500)},300)},function(){t&&clearTimeout(t),$(".toobar-item > div").css({display:"block",opacity:0,right:100,filter:"alpha(opacity=0)"}),$(".toobar-item > div").hide()})}};var i=function(t){var i={rightMenuBarGold:".j-touchgold",rightMenuBarTop:".j-returntop",popLoginBox:".j-poplogin",popSubbtn:".j-gethousekeeper",closePopBtn:".j-popclose",loginStatusUri:"http://"+location.hostname+"/jysteward-centerapipre/v1/goldenAssign/assignByAddress?address=",areasProvincesUri:"http://"+location.hostname+"/common-city/v1/province/queryAllProvinces?containChilds=false",areasCitysUri:"http://"+location.hostname+"/common-city/v1/city/queryCitys/",areasCountrysUri:"http://"+location.hostname+"/common-city/v1/country/queryCountrysByCityId/",houseKeeperUri:"http://"+location.hostname+"/getHouseKeeper.htm"};this.options=$.extend(i,t||{}),this.rightMenuBarBox=$(this.options.rightMenuBarBox),this.rightMenuBarGold=$(this.options.rightMenuBarGold),this.rightMenuBarTop=$(this.options.rightMenuBarTop),this.popLoginBox=$(this.options.popLoginBox),this.popSubbtn=$(this.options.popSubbtn),this.closePopBtn=$(this.options.closePopBtn),this.openStatus=!1,this.init()};i.prototype={init:function(){var t=this,i=$("#channelGeneroType").val();"furnishing"==i&&""!=i?t.isInit=!0:t.isInit=!1,t.showModel=!0,t.isSubmit=!0,t.cityId=$.cookie("jy_city")?$.cookie("jy_city").split(",")[0]:"110100000",t.ueserId=$.cookie("_uname")?$.cookie("_uname"):"",t.rightDomAppend(),t.closePop(),t.dropdownChange(),t.getHouseKeeper(),t.returnTop()},tpl:{popStatusLogin:'<div class="kepper-msg">\t\t\t\t\t\t\t\t\t<p class="kepper-img"><span></span></p>\t\t\t\t\t\t\t\t\t<div class="kepper-text">\t\t\t\t\t\t\t\t\t\t<p class="kepper-name">金管家　<span><%=empName%></span></p>\t\t\t\t\t\t\t\t\t\t<p class="kepper-tel">电　话　<span><%=telPrefix%>&nbsp;转&nbsp;<span><%=telSuffix%></span></p>\t\t\t\t\t\t\t\t\t\t<div class="kepper-help">\t\t\t\t\t\t\t\t\t\t\t<a href="http://www.jyall.com/public/genero.html" target="_blank">\t\t\t\t\t\t\t\t\t\t\t\t<h6>金管家能帮您做什么？</h6>\t\t\t\t\t\t\t\t\t\t\t\t<div>\t\t\t\t\t\t\t\t\t\t\t\t\t<span>买房</span><b>|</b>\t\t\t\t\t\t\t\t\t\t\t\t\t<span>卖房</span><b>|</b>\t\t\t\t\t\t\t\t\t\t\t\t\t<span>租房</span><b>|</b>\t\t\t\t\t\t\t\t\t\t\t\t\t<span>找装修</span><b>|</b>\t\t\t\t\t\t\t\t\t\t\t\t\t<span>找家政</span><br>\t\t\t\t\t\t\t\t\t\t\t\t\t<span>去旅游</span><b>|</b>\t\t\t\t\t\t\t\t\t\t\t\t\t<span>买汽车</span>\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<a class="kepper-know" href="http://www.jyall.com/public/genero.html" target="_blank">了解金管家 ></a>\t\t\t\t\t\t\t\t</div>',popStatusAddress:'<div class="jz-pop pop-region j-popdialogbox" style="display:block" id="shows">\t\t\t\t\t\t\t\t\t<a class="jz-close j-popclose" href="javascript:;"></a>\t\t\t\t\t\t\t\t\t<div class="pop-inner clearfix">\t\t\t\t\t\t\t\t\t\t<div class="pop-title">\t\t\t\t\t\t\t\t\t\t\t<h2>联系金管家</h2>\t\t\t\t\t\t\t\t\t\t\t<p>根据您的地址，为您推荐专属金管家，您还可以更换地址，获取新的金管家。</p>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t<div class="pop-sile" style="z-index:10;">\t\t\t\t\t\t\t\t\t\t  <div class="pop-content">\t\t\t\t\t\t\t\t\t\t    <div class="selector">\t\t\t\t\t\t\t\t\t\t        <div class="selector-t" id="SortBySelector_1">\t\t\t\t\t\t\t\t\t\t            <span class="selector-words">省／市</span>\t\t\t\t\t\t\t\t\t\t            <span class="arrow-drop"></span>\t\t\t\t\t\t\t\t\t\t        </div>\t\t\t\t\t\t\t\t\t\t        <div  class="sortbylist selector-con" id="pro_2" style="display: none;">\t\t\t\t\t\t\t\t\t\t            <ul id="rarea2" level="2">\t\t\t\t\t\t\t\t\t\t            </ul>\t\t\t\t\t\t\t\t\t\t        </div>\t\t\t\t\t\t\t\t\t\t    </div>\t\t\t\t\t\t\t\t\t\t     <div class="selector">\t\t\t\t\t\t\t\t\t\t        <div class="selector-t" id="SortBySelector_2">\t\t\t\t\t\t\t\t\t\t            <span class="selector-words">市</span>\t\t\t\t\t\t\t\t\t\t            <span class="arrow-drop"></span>\t\t\t\t\t\t\t\t\t\t        </div>\t\t\t\t\t\t\t\t\t\t        <div  class="sortbylist selector-con" id="pro_3" style="display: none;">\t\t\t\t\t\t\t\t\t\t            <ul id="rarea3" level="3">\t\t\t\t\t\t\t\t\t\t            </ul>\t\t\t\t\t\t\t\t\t\t        </div>\t\t\t\t\t\t\t\t\t\t    </div>\t\t\t\t\t\t\t\t\t\t     <div class="selector">\t\t\t\t\t\t\t\t\t\t        <div class="selector-t" id="SortBySelector_3">\t\t\t\t\t\t\t\t\t\t            <span class="selector-words">区</span>\t\t\t\t\t\t\t\t\t\t            <span class="arrow-drop"></span>\t\t\t\t\t\t\t\t\t\t        </div>\t\t\t\t\t\t\t\t\t\t        <div  class="sortbylist selector-con"  id="pro_4" style="display: none;">\t\t\t\t\t\t\t\t\t\t            <ul id="rarea4" level="4">\t\t\t\t\t\t\t\t\t\t            </ul>\t\t\t\t\t\t\t\t\t\t        </div>\t\t\t\t\t\t\t\t\t\t    </div>\t\t\t\t\t\t\t\t\t\t     \t\t\t\t\t\t\t\t\t\t<input id="right_area_id" name="right_area_id" type="hidden" value=""/>\t\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t\t\t\t\t  </div>\t\t\t\t\t\t\t\t\t\t    <a href="javascript:void(0);" class="btn font-size16 j-gethousekeeper">获取金管家</a>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t<div class="pop-result">\t\t\t\t\t\t\t\t\t\t\t<div class="p-s-status1">\t\t\t\t\t\t\t\t\t\t\t\t<div class="pop-plan"></div><div class="pop-flag"></div>\t\t\t\t\t\t\t\t\t\t\t\t<div class="pop-text">\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>金管家</strong><em>正赶往地球</em><br/>请选择降落地址……\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</div>',areasLiVal:'<li id="rarea_<%=id%>" value="<%=id%>"><%=name%></li>'},requestPopStatus:function(){var t=this;if("undefined"==t.cityId&&(t.openStatus=!0),!t.openStatus){t.ueserId=$.cookie("_uname")?$.cookie("_uname"):"";var i=t.options.loginStatusUri+"CY"+t.cityId;""==t.ueserId&&(i=i+"&ueserId="+t.ueserId),$.ajax({url:i,type:"post",dataType:"json",contentType:"application/json",cache:!1,success:function(i){t.buildPopHTML(i)},error:function(){}})}},buildPopHTML:function(t){var i=this,s=JY.Base.tmpl(i.tpl.popStatusLogin,t);i.openStatus||i.buildPopAddressHTML(t),$(".p-s-status1,.kepper-msg").remove(),$(s).appendTo(".pop-result")},buildPopAddressHTML:function(t){var i=this,s=JY.Base.tmpl(i.tpl.popStatusAddress,t);$(s).appendTo("body").show(),i.isSubmit&&i.areasSelectone(),$(".j-popdialogbox").bind("mousewheel",function(t){t.preventDefault()})},areasSelectone:function(){var t=this;$.ajax({url:t.options.areasProvincesUri,type:"get",dataType:"json",cache:!1,success:function(i){if(!i||i.length<1)return"";var s=[];$(i).each(function(i,o){s.push(JY.Base.tmpl(t.tpl.areasLiVal,o))}),$("#rarea2").append(s.join(""))},error:function(){}})},dropdownChange:function(){var t=this;$(document).on("click","div[id^=SortBySelector_]",function(){$("div[id^=pro_]").css("display","none"),"none"==$(this).siblings("div").css("display")?$(this).siblings("div").css("display","block"):$(this).siblings("div").css("display","none")}),$(document).on("click","li[id^=rarea]",function(){$(this).parent().parent().attr("style","");var i=$(this).text();$(this).parent().parent().siblings().children(".selector-words").text(i);var s=$(this).parent().attr("level"),o=$(this).val();$("#right_area_id").val("");for(var a=4;a>s;a--)$("#rarea"+a).parent().hide(),$("#rarea"+a).parent().siblings().children(".selector-words").text("请选择");if(""!=o){var e=t.options.areasCitysUri;2==s?e=t.options.areasCitysUri:3==s&&(e=t.options.areasCountrysUri),$.get(e+o,function(t){var i=parseInt(s)+1;$("#rarea"+i).empty(),$.each(t,function(t,s){$("#rarea"+i).append("<li id='rarea_"+s.id+"' value='"+s.id+"'>"+s.name+"</li>")})},"json")}else for(var a=3;a<=4;a++)$("#rarea"+a).empty();$(this).parent().parent().hide()}),$(document).on("click","#rarea4 li",function(){var i=$(this).val();$("#right_area_id").val(i),t.openStatus=!0,$(t.options.popSubbtn).trigger("click")})},getHouseKeeper:function(){var t=this;$(document).on("click",t.options.popSubbtn,function(i){if(t.showModel){var s=$("#right_area_id").val();""!=s&&t.isSubmit&&(t.isSubmit=!1,$.ajax({url:t.options.loginStatusUri+"CU"+s,type:"post",dataType:"json",contentType:"application/json",cache:!1,success:function(i){t.isSubmit=!0,t.buildPopHTML(i)},error:function(){}}))}else{$("#shows").hide();var o=$(".pops-two").is(":hidden");o?$(".pops-two").show():$(".pops-two").hide()}})},rightDomAppend:function(){var t=this;t.bindRightClick()},bindRightClick:function(){var t=this;$(document).on("click",t.options.rightMenuBarGold,function(i){0==$(".j-popdialogbox").length?t.requestPopStatus():"block"==$(".j-popdialogbox").css("display")?($(".j-popdialogbox").hide(),t.openStatus=!1):"none"==$(".j-popdialogbox").css("display")&&($(".j-popdialogbox").show(),t.openStatus=!1)})},closePop:function(){var t=this;$(document).on("click",t.options.closePopBtn,function(i){$(".j-popdialogbox").hide(),t.openStatus=!1})},returnTop:function(){var t=this;t.rightMenuBarTop.on("click",function(){$("html,body").animate({scrollTop:0},600)})}},setTimeout(function(){new t},1500)}(window)}]);