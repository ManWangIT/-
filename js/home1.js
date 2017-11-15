$(function(){
	//小图轮播图
    var num=0;
	$('#ul7_1 li').eq(0).addClass('active');
	$('#ul7_2 li img').eq(0).css('display','block')
	// 给每一个圆点加一个点击事件
	$(' .right-7 #ul7_1 li').click(function(){
		//获取下标
		 num=$(this).index();
		//清空所有样式
		$('#ul7_1 li').removeClass('active');
		$('#ul7_2 li img ').css('display','none');
		//显示自己的样式
		$('#ul7_1 li').eq(num).addClass('active');
		$('#ul7_2 li img').eq(num).css('display','block')
		
	})
	//自动轮播图
	
	//开启定时器
	//图片个数
	var aLi5=$(' .right-7 #ul7_1 li').length;
	var time5=setInterval(show, 2000)
	function show(){
		//清除所有样式
			$('#ul7_1 li').removeClass('active');
		$('#ul7_2 li img ').css('display','none');
		num++;
		if(num==aLi5){
			num=0;
		}
		$('#ul7_1 li').eq(num).addClass('active');
		$('#ul7_2 li img').eq(num).css('display','block')
	}
	//移入暂停
	$('#ul7_2').mouseenter(function(){
		//显示前一个后一个圆圈
		$('#pre_next').css('display','block');
		//关闭定时器
		clearInterval(time5);
	});
	$('#ul7_2').mouseleave(function(){
	 time5=setInterval(show, 2000);
	 $('#pre_next').css('display','none');

	});
	//点击前一个
	$('#pre').click(function(){
		num--;
		$('#ul7_1 li').removeClass('active');
		$('#ul7_2 li img ').css('display','none')
		if(num==-1){
			num=3;
		}
		$('#ul7_1 li').eq(num).addClass('active');
		$('#ul7_2 li img').eq(num).css('display','block');
        return false;
		
	});
	//点击下一个
    $('#next').click(function(){
    	show();
        return false;
    	
    });
    //给每一个图片加一个移入事件
    $('.right-7 #tutu_7 img').mouseenter(function(){
    	$(this).stop().animate({width:340,height:220,},1000)
    });
     $('.right-7 #tutu_7 img').mouseleave(function(){
    	$(this).stop().animate({width:300,height:180},1000)
    });
     //第11块 
     //给每一个图片加一个移入事件遮罩
    //给每一个图片加一个移入事件 
    $('.right-11 #tutu_7 .tu-7').mouseenter(function(){
    	$(this).children().eq(3).stop().animate({
    		width:300,
    		height:180,
    		display:'block',
    		marginLeft:-150,
    		marginTop:-90,
    	},1000)
    });
     $('.right-11 #tutu_7 .tu-7').mouseleave(function(){
    	$(this).children().eq(3).stop().animate({
    		width:0,
    		height:0,
    		display:'none',
    		marginLeft:0,
    		marginTop:0,
    	},1000);
    });

     //第十三块 选项卡
    //给每个盒子加移入事件
    $('.b13-right').children().eq(0).show();
    $('.index-13 .renqi a').mouseenter(function(){
    	
    	//鼠标移入的时候执行
    	//先获取该事件的下标
    	var index=$(this).index();
    	//先清空所有样式 再添加样式
    	$('.b13-right').children().hide();
    	$(' .index-13 .renqi a').removeClass('active');
    	//添加
    	$(this).addClass('active');
    	$('.b13-right').children().eq(index).show();
		})
    

// 汽车无缝轮播
        // 定义一个下标
    var numB12=0;
    //获取到每一个li
    var aLi2=$('#ul25 li img');
    //获取一个div的宽
    var liW1=aLi2.width();
    console.log(liW1)
    // 先设置ul的宽
        $('#ul25').width(aLi2.length * liW1);

    //开启定时器
    var time15=setInterval(show1,1500);
    function show1(){
//获取到顶部图片
       numB12++;
       if(numB12==2){
         $('#ul25').stop().animate({left:-(numB12+1)*liW1},800,function(){
        $('#ul25').css('left',-liW1);

       });
         numB12=0;
       }else{ 
       //切换图片
        $('#ul25').stop().animate({left: -(numB12+1) * liW1},800);
       }
       $('#ul15 li').removeClass('active');
       $('#ul15 li').eq(numB12).addClass('active');
      
    }
    $('#ul15 li').click(function(){
            $('#ul15 li').removeClass('active');
            numB12=$(this).index();
            $('#ul15 li').eq(numB12).addClass('active');
            $('#ul25').stop().animate({left:-(numB12+1)*liW1},800);
        });
    $('#box_15').mouseenter(function(){
        clearInterval(time15);
    })
    $('#box_15').mouseleave(function(){
        time15=setInterval(show1, 1500);
    });
    //给前一个 和后一个加点击事件
    // 上一页

    $(' #pre_next1  #pre ').click(function(){
        prePage3();
    });
    function prePage3(){
        numB12--;
        if(numB12==-1){
            $('#ul25').stop().animate({left:-(numB12+1)*liW1},800,function(){
        $('#ul25').css('left',-2*liW1)
        })
         numB12=1;   
    }else{
         $('#ul25').stop().animate({left: -(numB12+1) * liW1},800);
        
    }
     //清空改变
            $('#ul15 li').removeClass('active');
            $('#ul15 li').eq(numB12).addClass('active');
}

//下一页
$(' #pre_next1 #next ').click(function(){
    show1();
});


    // 汽车选享卡 第十五块
    $('.right-15').children().eq(0).show();
    $('.index-15 .renqi1 a').mouseenter(function(){
        
        //鼠标移入的时候执行
        //先获取该事件的下标
        var index=$(this).index();
        //先清空所有样式 再添加样式
        $('.right-15').children().hide();
        $(' .index-15 .renqi1 a').removeClass('active');
        //添加
        $(this).addClass('active');
        $('.right-15').children().eq(index).show();
        });

    //第十七块的轮播图
    var iNow17=0;
    //获取到每一个li
    var aLi17=$('.ul-172 li');
    //设置.ul-172的宽
    //获取li的宽
    var liW=aLi17.width();
    //设置大盒子的宽
    $('.ul-172').width(aLi17.length*liW);
    //开启定时器
    var time17=setInterval(z1,1500);
    function z1(){
        iNow17++;
        if(iNow17==aLi17.length-2){
            $('.ul-172').stop().animate({left:-(iNow17+1)*liW},800,function(){
                $('.ul-172').css('left',-liW);
            });
            iNow17=0;
        }else{
            $('.ul-172').stop().animate({left:-(iNow17+1)*liW},800)
        }
        //清除改变样式
        $('.ul-171 li').removeClass('active');
        $('.ul-171 li').eq(iNow17).addClass('active');
    }
    $('.rtop-17').mouseenter(function(){
        //显示前一个后一个圆圈
        $('#pre_next2').css('display','block');
        //关闭定时器
        clearInterval(time17);
    });
    $('.rtop-17').mouseleave(function(){
     time17=setInterval(z1, 1500);
     $('#pre_next2').css('display','none');

    });
    //上一页
     $(' #pre_next2 #pre ').click(prePage);
    function prePage(){
        iNow17--;
        if(iNow17==-1){
            $('.ul-172').stop().animate({left:-(iNow17+1)*liW},800,function(){
        $('.ul-172').css('left',-(aLi17.length-2)*liW)
        })
         iNow17=aLi17.length-3;   
    }else{
         $('.ul-172').stop().animate({left: -(iNow17+1) * liW},800);
        
    }
     //清空改变
            $('.ul-171 li').removeClass('active');
            $('.ul-171 li').eq(iNow17).addClass('active');
}
//下一页
$(' #pre_next2 #next ').click(function(){
    z1();
});
//选项卡
        $('.ul-171 li').click(function(){
            $('.ul-171 li').removeClass('active');
            iNow17=$(this).index();
            $('.ul-171 li').eq(iNow17).addClass('active');
            $('.ul1-172').stop().animate({left:-(iNow17+1)*liW},800);
        });


        //家园旅行选项卡
        // 给家园特卖和精品推荐加点击事件
        // 默认选中第一个盒子
        $('.right-17 ').children().eq(0).css('display','block')

        $('.lvxing a').mouseenter(function(){
            //先清除所有样式
            $('.lvxing a').removeClass('active');
            $('.right-17 ').children().css('display','none');
            // 选中该样式
            //获取该下标值
            var index=$(this).index();
            $(this).addClass('active');
            $('.right-17 ').children().eq(index).css('display','block');

        });

        // 第十九块选项卡
        // 给友情连接和热门城市加点击事件
        $('.bot-19').children().eq(0).css('display','block');
        $('.left-19 span').mouseenter(function(){
            // 先清除所有样式
            $('.left-19 span').removeClass('active');
            $('.bot-19').children().css('display','none');
            //设置样式
            var index=$(this).index();
            $(this).addClass('active');
            $('.bot-19').children().eq(index).css('display','block');
        })

    // 给家园工具加点击事件
    // 右边定位
    function dingxin(obj){
       obj.hover(function(){
        $(this).addClass('active');
        $(this).children().eq(1).css('display','block');
        $(this).children().eq(1).stop().animate({
            right:45,
        },1000)
    },function(){
         $(this).removeClass('active');
        $(this).children().eq(1).css('display','none');
        $(this).children().eq(1).stop().animate({
            right:160,
        },1000)
    });
    }
    dingxin($('.y1'))
    dingxin($('.y3'))
    dingxin($('.y4'))
    dingxin($('.y6'))
     $('.y5').hover(function(){
        $(this).addClass('active');
        $(this).children().eq(1).css('display','block');
        $(this).children().eq(1).stop().animate({
            left:-130
        },1000)
    },function(){
         $(this).removeClass('active');
        $(this).children().eq(1).css('display','none');
        $(this).children().eq(1).stop().animate({
            left:-280,
        },1000)
    });

// 阴影的出现 隐藏

$('.b13-right img').hover(function(){
    $(this).siblings().eq(0).slideDown();
    console.log(this)
},function(){
    $(this).siblings().eq(0).slideUp();
})


// 第四块中间轮播图
    var iNow1=0;
        var aLi4=$('.ul-44 li');
        // 一个li的宽
        var liW4=aLi4.width();
        //先设置ul的宽
        $('.ul-44').width(aLi4.length*liW4);
        //下一页
        $('#next').on('click',nextPage1);
        function nextPage1(){
            iNow1++;
            if(iNow1==aLi4.length-2){
                $('.ul-44').stop().animate({
                    left:-(iNow1+1)*liW4
                },800,
                function(){
                    $('.ul-44').css('left',-liW4);
                }
                );
                iNow1=0;

            }else{
                $('.ul-44').stop().animate({
                    left:-(iNow1+1)*liW4
                },800);
            }
            //改变选项
            $('.ul-43 li').removeClass('active');
            $('.ul-43 li').eq(iNow1).addClass('active');
            yangshi(iNow1)

        };
        //上一页
        $('#pre').on('click',prePage1);
        function prePage1(){
            iNow1--;
            if(iNow1==-1){
                $('.ul-44').stop().animate({left:-(iNow1+1)*liW4},800,function(){
                    $('.ul-44').css('left',-(aLi4.length-2)*liW4);
                });
                iNow1=aLi4.length-3;
            }else{
                $('.ul-44').stop().animate({
                    left:-(iNow1+1)*liW4
                },800);
            }
            //清空改变
            $('.ul-43 li').removeClass('active');
            $('.ul-43 li').eq(iNow1).addClass('active');
             yangshi(iNow1)

        }
        //选项卡
        $('.ul-43 li').click(function(){
            $('.ul-43 li').removeClass('active');
            iNow1=$(this).index();
            yangshi(iNow1);
            $('.ul-43 li').eq(iNow1).addClass('active');
            $('.ul-44').stop().animate({left:-(iNow1+1)*liW4},800);
        })
        var time4=setInterval(function(){
        nextPage1();
               
         
    }, 2000)
        //显示上一个和下一个
        $('.mid-4').mouseenter(function(){
            $('#pre_next4').slideDown();
            clearInterval(time4);

        });
         $('.mid-4').mouseleave(function(){
            $('#pre_next4').slideUp();
            time4=setInterval(function(){
        nextPage1();
       
                
         
    }, 2000)

        });
 
    function yangshi(a){
        switch(a) {
             case 0:
             $('.index-4').css('background','#b4b7bc')
                 
                 break;
             case 1:
                 $('.index-4').css('background','#cabdd4')
                 break;
              case 2:
                 $('.index-4').css('background','#efdcae')
                 break;
            case 3:
                 $('.index-4').css('background','#cbf4fa')
                 break;

            case 4:
                 $('.index-4').css('background','#d9d8d3')
                 break;

            case 5:
                 $('.index-4').css('background','#99daff')
                 break;

    }
}

// 地址移动
    var iNow0=0;
        var aLi0=$('.dizhi-2 a');
        // 一个li的宽
        var liW0=aLi0.height();
        //先设置ul的宽
        $('.dizhi-2').height(aLi0.length*liW0);
        //下一页
      var time0=setInterval(nextPage0, 2000)
        function nextPage0(){
            iNow0++;
            if(iNow0==aLi0.length-2){
                $('.dizhi-2').stop().animate({
                    top:-(iNow0+1)*liW0
                },1000,
                function(){
                    $('.dizhi-2').css('top',-liW0);
                }
                );
                iNow0=0;

            }else{
                $('.dizhi-2').stop().animate({
                    top:-(iNow0+1)*liW0
                },1000);
            }
          
           
           

        };
        

        //第四块的选选项卡
         
        $('.ul-4 li').mouseenter(function(){
            // 先清除所有样式
            $('.ul-4 li').removeClass('on');
            $('#boxL_4 ').children().css('display','none');
            //设置样式
            var index=$(this).index();
            $(this).addClass('active');
          $('#boxL_4 ').children().eq(index).css('display','block');
        })
        $('.ul-4 li').mouseleave(function(){
          
            $('#boxL_4 ').children().css('display','none');

        })


        //给左边的楼层定位加点击事件
        $('.louyu a').mouseenter(function(){
            var index=$(this).index();
          
                
                    $('.louyu a').eq(0).html('新房')
                  
            
                     $('.louyu a').eq(1).html('2F')
                    
                  
                     $('.louyu a').eq(2).html('3F')
                    
            
              
                     $('.louyu a').eq(3).html('4F')
                    
                   
                
                     $('.louyu a').eq(4).html('5F')
                    
                  
                
                     $('.louyu a').eq(5).html('6F')
                    
                  
           


            $(this).addClass('active');
            
            switch(index) {
                case 0:
                    $('.louyu a').eq(0).html('新房')
                    break;
                case 1:
                     $('.louyu a').eq(1).html('二手房')
                    
                    break;
                 case 2:
                     $('.louyu a').eq(2).html('租房')
                    
                    break;
                case 3:
                     $('.louyu a').eq(3).html('大家装')
                    
                    break;
                 case 4:
                     $('.louyu a').eq(4).html('家园汽车')
                    
                    break;
                 case 5:
                     $('.louyu a').eq(5).html('家园旅行')
                    
                    break;
            }
            
        });
        $('.louyu a').mouseleave(function(){
             $('.louyu a').removeClass('active');
            $('.louyu a').eq(0).html('新房')
                  
            
                     $('.louyu a').eq(1).html('2F')
                    
                  
                     $('.louyu a').eq(2).html('3F')
                    
            
              
                     $('.louyu a').eq(3).html('4F')
                    
                   
                
                     $('.louyu a').eq(4).html('5F')
                    
                  
                
                     $('.louyu a').eq(5).html('6F')
                    
        });
  //懒加载
  lazyLoad()
  $(window).scroll(lazyLoad)
  function lazyLoad() {
    var windowTop = $(window).scrollTop()+$(window).height();
    $('img').each(function (index,ele) {
        var imgTop = $(ele).offset().top;
        if (imgTop<=windowTop) {
            var value = $(ele).attr('_src');
             $(ele).attr('src',value)
        }
    })
    
 
  }     
    






 })