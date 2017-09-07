/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-31 16:56:29
*/

$(document).ready(function(){
    //获取验证码事件
    var $getNum = $('#getNum');
    var flag = true;
    $getNum.on('click', function () {
        var $this = $(this);
        var userPhone = $('#userPhone').val();
        if (userPhone == '') {
            alert('请输入用户手机号');
            return false;
        }
        if (flag == true) {
            flag = false;
            $this.addClass('active');
            $this.html('<i>60</i>s后获取');
            Countdown($this);
            setTimeout(function () {
                $this.removeClass('active');
                $this.html('获取验证码');
                flag = true;
                timer = null;

            },60000);
        } else {
            return false;
        }
    });
    function Countdown(obj) {
        var now = 60;
        var timer = null;
        timer = setInterval(function () {
            if (now>1) {
                now -= 1;
                obj.html('<i>'+ now +'</i>s后获取');
            }
        }, 1000);
    }
    // 验证不为空
    $('.subbtn').on('click', function () {
        var userPhone = $('#userPhone').val();
        var carPhone = $('#carPhone').val();
        var num = $('#num').val();
        if (userPhone == '') {
            alert('请输入用户手机号');
            return false;
        }
        if (carPhone == '') {
            alert('请输入车主手机号');
            return false;
        }
        if (num == '') {
            alert('请输入验证码');
            return false;
        }
    });


    $('.modal').on('touchmove', function (event) {
        event.preventDefault();
    });
    // 关闭弹窗
    $('.modal-footer button').on('click', function (event) {
        $('#mask').hide();
        var $modal = $(this).parents('.modal');
        $modal.hide();
        
    });
    $('.modal-close').on('click', function (event) {
        $('#mask').hide();
        var $modal = $(this).parents('.modal');
        $modal.hide();
    });
});