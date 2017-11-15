$(function(){

	// //当input获取光标时 边框变颜色
		//验证格式
		$('.input').change(function(){
			var length=$(this).val().length;
			if(length>0&&length<6){
				$(this).parent().css('border','1px solid #f3233c');
				$('.pp').css('display','block')
			}else{
				$(this).parent().css('border','1px solid #666');
				$('.pp').css('display','none')
			}
		});
		


	$('.input').focus(function(){

			$(this).parent().css('border','1px solid #666')
		
	});
	//如果内容为空 提交出现错误
	//给提交按钮加点击事件
	
	$('.submit').click(function(){
		var val=$('.input2').val();
		var val1=$('.input1').val();
		if(val==0) {
			$('.mid-b2 span').html('请输入密码');
			$('.input2-b2').css('border','1px solid #f3233c')
		}
		if(val1==0) {
			$('.mid-b2 span').html('请输入用户名');
			$('.input2-b').css('border','1px solid #f3233c')
		}
		if(val==0&&val1==0){
			$('.mid-b2 span').html('请输入用户名和密码');
			$('.input2-b1').css('border','1px solid #f3233c')
		}
		// 输入用户名的格式为6-22个字符 不支持下划线 不支持文字
		// /[a-z0-9]{6,22}/
		//输入密码的格式为6-22个字符
		// / [0-9]{6-22}|'+'/ 
		var reg=/^[a-z0-9]{6,22}$/;
		var x=reg.test($('.input2').val());
		var x1=reg.test($('.input1').val());
		if(x&&x1){
			$('.input').val(' ');
			alert('登录成功');

		}

		
	

	});
	




})