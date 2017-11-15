$(function () {
    $("#tel").blur(function () {//手机号输入blur事件
        houseOrderObj.telValidate();
    });
    $("#name").blur(function () {
        houseOrderObj.nameValidate();
    });
    $("#applyValid").bind("click", function () {
        if (houseOrderObj.isApply) {
            houseOrderObj.applyValid();
        }
    });

    $("#getIdentifyCode").bind("click", function () {
        if (houseOrderObj.canGetCode) {
            houseOrderObj.getIdentifyCode();
        }
    });

    //关闭
    $('#cloe').click(function () {
        $('.j-clobf').hide();
    });

    var houseOrderObj = {
        timer: null,
        customerId: '',
        isLoginFlag: false,
        isEffect: false,
        isApply: false,
        canGetCode: true,
        groupId: '',
        skuId: '',
        goodsId: '',
        userID: '',
        bizCode: '',
        tel: '',
        validCode: true,
        init: function () {//申请预约窗口
            houseOrderObj.bizCode = $("#bizCode").val(); //初始化预约数据
            houseOrderObj.isLogin();//判断是否登录并分配金管家
            houseOrderObj.isApply = true;
            if (houseOrderObj.isLoginFlag == false) {
                $("#name").val('');//清空弹窗
                $("#tel").val('');
                $("#inputCode").val('');
            }
        },

        nameValidate: function () {//验证name
            if ($("#name").val() == "") {
                $('#errorMsg').html("姓名不能为空！").show();
                return false;
            } else {
                var reg = /[\u0391-\uFFE5A-Za-z]+/g;
                if (!reg.test($("#name").val())) {
                    $('#errorMsg').html("姓名不支持数字和特殊字符！").show();
                    $("#name").val("");
                    return false;
                }
            }

            return true;
        },
        telValidate: function (tel) {//手机合法校验
            var reg = /(^13\d{9}$)|(^14)[5,7]\d{8}$|(^15[0,1,2,3,5,6,7,8,9]\d{8}$)|(^17)[0,6,7,8]\d{8}$|(^18\d{9}$)/g;
            if (!reg.test($("#tel").val().replace(/-/g, ""))) {
                $('#errorMsg').html("请输入11位有效的手机号！").show();
                $("#tel").val("");
                return false;
            } else {
                $('#errorMsg').html("").show();
                return true;
            }
        },
        regCodeValidate: function (code) {//验证法输入校验
            var regCode = /^\d{4,}$/;
            if (regCode.test(code)) {
                return true;
            } else {
                return false;
            }
        },

        isLogin: function () {//判断是否登录
            houseOrderObj.validCode = true;
            if ($("#isLogin").val() == 1) {
                houseOrderObj.isLoginFlag = true;
                //houseOrderObj.validCode = false;
                return true;
            } else {
                houseOrderObj.isLoginFlag = false;
                //houseOrderObj.validCode = true;
                return false;
            }
        },
        applyValid: function () {//验证预约申请
            if (!houseOrderObj.nameValidate()) {
                return;
            }

            var tel = $("#tel").val();
            if (houseOrderObj.telValidate(tel)) {
                var code = $("#inputCode").val();
                if (houseOrderObj.regCodeValidate(code)) {//判断手机号是否正确
                    houseOrderObj.apply();
                } else {
                    $('#errorMsg').html("请输入有效的验证码！").show();
                }
            } else {
                $('#errorMsg').html("请输入有效的手机号并获取验证码！").show();
            }
        },
        countDowm: function () {//倒计时处理
            var time = 60;
            var code = $("#getIdentifyCode");
            code.addClass("grey");
            houseOrderObj.validCode = false;
            houseOrderObj.timer = setInterval(function () {
                time--;
                code.val(time + "秒后重新获取");
                if (time == 0) {
                    clearInterval(houseOrderObj.timer);
                    code.val("重新获取");
                    houseOrderObj.validCode = true;
                    houseOrderObj.canGetCode = true;
                    code.removeClass("grey");

                }
            }, 1000);
        },
        getIdentifyCode: function () {//获取验证码
            var tel = $("#tel").val().replace(/-/g, "");
            var typeStr = houseOrderObj.bizCode;
             if ($("#isSouFang").val() == 1) {
                typeStr = "stewardEntrust";
             }
            if (houseOrderObj.telValidate(tel)) {//验证手机号是否正确
                $("#getIdentifyCode").val("发送中");
                var url = $("#basePath").val() + "/goods/appointment/sendvcode";
                $.getJSON(url, {mobile: tel, type: typeStr}, function (data) {
                    if (data.state == "1") {
                        houseOrderObj.isApply = true;
                        houseOrderObj.canGetCode = false;
                        if (houseOrderObj.validCode) {
                            houseOrderObj.countDowm();
                        }
                    }else{
                        $('#errorMsg').html("发送验证码失败,请稍后再试！").show();
                        $("#getIdentifyCode").val("重新获取").removeClass("grey");
                        houseOrderObj.canGetCode = true;
                    }
                });
            } else {
                $('#errorMsg').html("请输入有效的手机号码！").show();
            }
        },

        apply: function () {//申请预约
        	var _track_d = '';
            if ($.cookie('_track_d')) {
                _track_d = $.cookie('_track_d').split('.')[0];
            }
        	
            houseOrderObj.isApply = false;
            $('#errorMsg').html("").hide();

            var url = $("#basePath").val() + "/goods/appointment/order?deviceId=" + _track_d;
            $("#dataForm").attr("action", url);
            $("#dataForm").submit();
        }
    };

    houseOrderObj.init();


});
