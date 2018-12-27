if (typeof jQuery === "undefined") {
    throw new Error("Backend requires jQuery");
  }
  
  $.Backend = {};

  $(function () {

    "use strict";

    _initLogin();
    // login start
    function _initLogin(){
        var submit   = $('#sub');
        submit.click(function(){
            var username = $('#username').val(),
                password = $('#password').val(),
                captcha  = $('#captcha').val();
            if (username ==''){
                $.Pop.error('用户名不能为空！')
            }else if(password==''){
                $.Pop.error('密码不能为空请输入密码！')
            }else if(captcha==''){
                $.Pop.error('请输入验证码！')
            } else{
                NProgress.start()
                $.ajax({
                    url:'index.html',
                    type:'post',
                    data:$("#login-form").serialize(),
                    success:function(data){
                        if(data.success){

                        }else{
                            $.Pop.error('登录失败,请稍后重试！')
                        }
                    }
                })
            }     
            return false;
        })
        
    }
  })


  /**layer plugin */
  $.Pop = {};

  $.Pop = {
      error:function(msg){
        layer.msg(msg,{
            anim: 6
        })
      }
  }