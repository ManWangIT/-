$(function(){
	// 定义一个下标
	var numB1=0;
	//获取到每一个li
	var aLi1=$('#ul1 li');
	//获取一个div的宽
	var liW=aLi1.width();
	console.log(liW)
	// 先设置ul的宽
		$('#ul1').width(aLi1.length * liW);

	//开启定时器
	var time1=setInterval(function(){
//获取到顶部图片
       numB1++;
       if(numB1==2){
       	 $('#ul1').stop().animate({left:-(numB1+1)*liW},function(){
       	$('#ul1').css('left',-liW);

       });
       	 numB1=0;
       }else{ 
       //切换图片
       	$('#ul1').stop().animate({left: -(numB1+1) * liW});
       }
       if(numB1%2==0){
       	$('.index-1').css('backgroundColor','#d6d2e3');
       }else{
       	$('.index-1').css('backgroundColor','#f7f7f7');
       }
       
      
	},3000);
	//第二块我的家园显示
	//获取我的家园盒子
	$('#right_2 li').on('mouseenter',function(){
		//显现jia_box盒子
		$(this).children().css('display','block');
		//给该li标签设置样式
		$(this).addClass('active');	
	});
		//移出事件
	$('#right_2 li').on('mouseleave',function(){
		//隐藏jia_box盒子
		$(this).children().css('display','none');
		
		//删除该li标签设置样式
		$(this).removeClass('active');
		$('.xiabiao').css('display','block');
		//确保第一个首页不被隐藏掉	
		$(this).children().eq(0).css('display','block');
	})
		//定位站
		//获取该标签 加移入事件
		$('#xuan').on('mouseenter',function(){
			$('#ul_2').css('display','block');
			$('#ul_2 li').click(function(){
				var name=$(this).html();
				//把名字赋值给选项的内容
				$('#xuan a').html(name);
				//隐藏该ul
				$('#ul_2').css('display','none');

			})

		});
		//给一个移除事件
		$('#xuan').mouseleave(function(){
			$('#ul_2').css('display','none');
		});
		//在输入框里的下标2
		//获取xinfang盒子 加移入事件
		$('#xinfang').on('mouseenter',function(){
			//显示xin盒子
			$('#xin').css('display','block');
			//加点击事件
			$('#xin li').click(function(){
				var name=$(this).html();
				console.log(name)
				$('#newfang').html(name);
				//隐藏该ul
				$('#xin').css('display','none')
			});

		});
		//移除盒子
		$('#xinfang').on('mouseleave',function(){
			//显示xin盒子
			$('#xin').css('display','none');
		});
		//点击输入框获取光标
		$('.input').click(function(){
			if(this.value==0){
             $(this).attr('placeholder','请输入楼盘名、地名')
			}else{
				 $(this).attr('placeholder','')
			}
		
		});
		
		//第四块 
		//给左边的图标的每一个li加一个移入移除事件
		$('.left-4 .ul-4 li .a1').mouseenter(function(){
			//添加该a 标签的样式
			$(this).addClass('active');
			$(this).children().eq(0).children().addClass('active1');
			$(this).children().eq(1).addClass('active11');
		});
		//移除a1该事件
		$('.left-4 .ul-4 li .a1').mouseleave(function(){
			//添加该a 标签的样式
			$(this).removeClass('active');
			$(this).children().eq(0).children().removeClass('active1');
			$(this).children().eq(1).removeClass('active11');
		});
		//a2事件
		$('.ul-4 li .a2').mouseenter(function(){
			//添加该a 标签的样式
			$(this).addClass('active');
			$(this).children().eq(0).children().addClass('active2');
			$(this).children().eq(1).addClass('active11');
		});
		//移除a2该事件
		$('.ul-4 li .a2').mouseleave(function(){
			//添加该a 标签的样式
			$(this).removeClass('active');
			$(this).children().eq(0).children().removeClass('active2');
			$(this).children().eq(1).removeClass('active11');
		});
		//a3事件
		$('.ul-4 li .a3').mouseenter(function(){
			//添加该a 标签的样式
			$(this).addClass('active');
			$(this).children().eq(0).children().addClass('active3');
			$(this).children().eq(1).addClass('active11');
		});
		//移除a3该事件
		$('.ul-4 li .a3').mouseleave(function(){
			//添加该a 标签的样式
			$(this).removeClass('active');
			$(this).children().eq(0).children().removeClass('active3');
			$(this).children().eq(1).removeClass('active11');
		});
		//a4事件
		$('.ul-4 li .a4').mouseenter(function(){
			//添加该a4 标签的样式
			$(this).addClass('active');
			$(this).children().eq(0).children().addClass('active4');
			$(this).children().eq(1).addClass('active11');
		});
		//移除a4该事件
		$('.ul-4 li .a4').mouseleave(function(){
			//添加该a 标签的样式
			$(this).removeClass('active');
			$(this).children().eq(0).children().removeClass('active4');
			$(this).children().eq(1).removeClass('active11');
		});
		//a5事件
		$('.ul-4 li .a5').mouseenter(function(){
			//添加该a4 标签的样式
			$(this).addClass('active');
			$(this).children().eq(0).children().addClass('active5');
			$(this).children().eq(1).addClass('active11');
		});
		//移除a5该事件
		$('.ul-4 li .a5').mouseleave(function(){
			//添加该a 标签的样式
			$(this).removeClass('active');
			$(this).children().eq(0).children().removeClass('active5');
			$(this).children().eq(1).removeClass('active11');
		});
		//a6事件
		$('.ul-4 li .a6').mouseenter(function(){
			//添加该a4 标签的样式
			$(this).addClass('active');
			$(this).children().eq(0).children().addClass('active6');
			$(this).children().eq(1).addClass('active11');
		});
		//移除a6该事件
		$('.ul-4 li .a6').mouseleave(function(){
			//添加该a 标签的样式
			$(this).removeClass('active');
			$(this).children().eq(0).children().removeClass('active6');
			$(this).children().eq(1).removeClass('active11');
		});
		//第六块 吸顶条
		//获取绝对高度
		var top=$('#xiDing').offset().top;
		var top1=$('.index-18').offset().top;
		var top2=$('.index-9').offset().top;
		var top3=$('.index-11').offset().top;
		var top4=$('.index-13').offset().top;
		var top5=$('.index-15').offset().top;
		var top6=$('.index-17').offset().top;
		window.onscroll=function(){
		var scrollTop1=document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollTop1>=top){
			$('#xiDing').css('position','fixed');
			$('.louyu').css('position','fixed');
			$('xidingtiao').css('display','block');
			$('.louyu').css('display','block');
			$('#gifding').css('display','block');
		}
		 if(scrollTop1<top){
		 	$('.louyu a').eq(0).html('新房')
			$('.louyu a').eq(1).html('2F')
	          $('.louyu a').eq(2).html('3F')
	         $('.louyu a').eq(3).html('4F')
	         $('.louyu a').eq(4).html('5F')
	        $('.louyu a').eq(5).html('6F')
			$('#xiDing').css('position','static');
			$('xidingtiao').css('display','none');
			$('#gifding').css('display','none');
			$('.louyu').css('position','absolute');
			$('.louyu').css('display','none'); 
			$('.louyu a').removeClass('active');
			 $('.louyu a').eq(0).addClass('active');

		}
		if(scrollTop1>=top1){
			$('.louyu a').eq(0).html('新房')
			$('.louyu a').eq(1).html('2F')
	          $('.louyu a').eq(2).html('3F')
	         $('.louyu a').eq(3).html('4F')
	         $('.louyu a').eq(4).html('5F')
	        $('.louyu a').eq(5).html('6F')
	          $('.louyu a').removeClass('active');
			$('.louyu').css('display','none');
			 $('.louyu a').eq(0).addClass('active');
		}
		//选中1楼
		if(scrollTop1>=top2){
			 $('.louyu a').eq(0).html('新房')
                     $('.louyu a').eq(1).html('2F')
                     $('.louyu a').eq(2).html('3F')
                     $('.louyu a').eq(3).html('4F')
                     $('.louyu a').eq(4).html('5F')
                     $('.louyu a').eq(5).html('6F')
                     $('.louyu a').removeClass('active');
			$('.louyu a').eq(1).html('二手房');
			 $('.louyu a').eq(1).addClass('active');
		}
		//2lou 
		if(scrollTop1>=top3){
			$('.louyu a').eq(1).html('2F')
                     $('.louyu a').eq(2).html('3F')
                     $('.louyu a').eq(3).html('4F')
                     $('.louyu a').eq(4).html('5F')
                     $('.louyu a').eq(5).html('6F')
                     $('.louyu a').removeClass('active');
			 $('.louyu a').eq(2).html('租房');
			  $('.louyu a').eq(2).addClass('active');
			
		}
		//3lou
		if(scrollTop1>=top4){
			$('.louyu a').eq(1).html('2F')
	          $('.louyu a').eq(2).html('3F')
	         $('.louyu a').eq(3).html('4F')
	         $('.louyu a').eq(4).html('5F')
	        $('.louyu a').eq(5).html('6F')
	          $('.louyu a').removeClass('active');
	         $('.louyu a').eq(3).html('大家装');
			 $('.louyu a').eq(3).addClass('active');
		}
		//4lou
		if(scrollTop1>=top5){
			$('.louyu a').eq(1).html('2F')
	          $('.louyu a').eq(2).html('3F')
	         $('.louyu a').eq(3).html('4F')
	         $('.louyu a').eq(4).html('5F')
	        $('.louyu a').eq(5).html('6F')
	          $('.louyu a').removeClass('active');
	          $('.louyu a').eq(4).html('家园汽车');
			 $('.louyu a').eq(4).addClass('active');
		}
		//5lou
		if(scrollTop1>=top6){
			$('.louyu a').eq(1).html('2F')
	          $('.louyu a').eq(2).html('3F')
	         $('.louyu a').eq(3).html('4F')
	         $('.louyu a').eq(4).html('5F')
	        $('.louyu a').eq(5).html('6F')
	          $('.louyu a').removeClass('active');
	            $('.louyu a').eq(5).html('家园旅行');
			 $('.louyu a').eq(5).addClass('active');
		}



    };


   


   // 足球运动
   //距离
   var s=0;
   //速度
   var v=10;
   //左边距离
   var ls=0;
   //左边速度
   var lv=10;
   //品目的宽度
   var width=$(window).width();
   //高度
   var height=$(window).height();
   console.log(height)
   //盒子的宽度
   var boxW=$('#fb').outerWidth();
   //盒子的高度
   var boxH=$('#fb').outerHeight();
   //最大高度距离和最大宽度距离
   var maxX=width-boxW-35;
   var maxY=height-boxH;
   //加一个定时器
   var timef=setInterval(function(){
   		s+=v;
   		if(s>maxY){
   			v=-v;
   		}
   		if(s<0){
   			v=-v;
   		}
   		ls+=lv;
   		if(ls>maxX){
   			lv=-lv;
   		}
   		if(ls<0){
   			lv=-lv;
   		}
   		$('#fb').css({
   			top:s,
   			left:ls,
   		})
 
   		
   }, 100);


   //点击隐藏
   // 给fb一个点击事件
   $('#fb').click(function(){
   		$(this).css('display','none')
   });



		





	})