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
    $getNum.click(function () {
        var $this = $(this);
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
});