function validTools(type,id){
    var reg = "";
    var str = $("#"+id).val();
    var msg = "";
    switch(type){
        case 'empty':
            str = $.trim(str);
            reg = /^\S+$/;
            msg = "不能为空，不能包含空格";
            break;
        case 'isnul':
            str = $.trim(str);
            reg = /.+$/;
            msg = "不能为空!";
            break;
        case 'chinese':
            reg = /^[\u4e00-\u9fa5]+$/i;
            msg = "必须为汉字";
            break;
        case 'number':
            reg = /^\d+$/;
            msg = "必须为数字";
            break;
        case 'time':
            reg = /^\d{2}:\d{2}$/;
            msg = "格式为 00:00";
            break;
        case 'timelong':
            reg = /^\d{2}:\d{2}:\d{2}$/;
            msg = "格式为 00:00:00";
            break;
        case 'datelong':
            reg = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
            msg = "格式为 0000-00-00 00:00:00";
            break;
        case 'date':
            reg = /^\d{4}-\d{2}-\d{2}$/;
            msg = "格式为 0000-00-00";
            break;
        case 'ip':
            reg = /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-4]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/;
            msg = "格式为000.000.000.000";
            break;
        case 'mac':
            reg = /^([0-9a-fA-F]{2}\-){5}([0-9a-fA-F]{2})$/;
            msg = "格式为00-00-00-00-00-00(16位进制数)";
            break;
        case 'numword':
            reg = /^\w+$/;
            msg = "必须为数字和字母";
            break;
        case 'numword99':
            reg = /^([1-9]\d?|99)$/;
            msg = "必须为1到99的整数";
            break;
        case 'numword32':
            reg = /^[0-9a-zA-Z]{1,32}$/;
            msg = "必须为32位的字母和数字";
            break;
        case 'numword416':
            reg = /^[0-9a-zA-Z]{4,16}$/;
            msg = "必须为4-16位的字母和数字";
            break;
        case 'ipmask':
            reg = /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-4]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])\/(3[0-2]|2[0-9]|1[6-9])$/;
            msg = "格式为0.0.0.0/0";
            break;
        case 'iprange':
            reg = /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-4]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])-(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-4]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/;
            msg = "格式为0.0.0.0-0.0.0.0";
            break;
		case 'iporrange':
            reg = /^(((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$)|(((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))-((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))$))/;
            msg = "格式为0.0.0.0或0.0.0.0-0.0.0.0";
            break;
        case 'ipnet':
            reg = /^(((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$)|(((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))\/([3][0-2]|[2][0-9]|[1][0-9]|[0-9])$))/
            msg = "格式为0.0.0.0或0.0.0.0/16";
            break;
        case 'ipall':
            reg = /^(((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$)|(((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))-((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))$)|(((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))\/([3][0-2]|[2][0-9]|[1][0-9]|[0-9])$))/;
            msg = "格式为0.0.0.0或0.0.0.0-0.0.0.0或0.0.0.0/16";
            break;
        case 'passlong':
            reg = /^[0-9a-zA-Z]{8,30}$/;
            msg = "长度为8到30个字符长度的字母或数字";
            break;
        case 'passwep':
            reg = /^([0-9a-zA-Z]{5})$|^([0-9a-zA-Z]{13})$|^([0-9a-zA-Z]{16})$/;
            msg = "长度只能为5或13或16个字符长度的字母或数字";
            break;
        case 'passwpa':
            reg = /^([0-9a-zA-Z]{8,128})$/;
            msg = "长度为8至128个字符长度的字母或数字";
            break;
        case 'usbkey':
            reg = /^([0-9a-fA-F]{8})$/;
            msg = "长度为8的十六进制字符串";
            break;
        case 'email':
            reg =  /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            msg = "格式为000@aa.com";
            break;
        case 'mobile':
            reg = /^1\d{10}$/;
            msg = "请输入正确11位有效的手机号码";
            break;
        case 'prewordnum':
            reg = /^[a-zA-Z][a-zA-Z0-9]*$/;
            msg = "必须为数字和字母，并以字母开头";
            break;
        case 'decimal':
            reg = /^[0-9]+([.]{1}[0-9]{1,3})?$/;
            msg = "必须为非负整数或小数（精确到小数点后三位以内）";
            break;
        case 'netmask':
            reg = /^255\.255\.0\.0|255\.255\.255\.0$/;
            msg = "必须为255.255.0.0或255.255.255.0";
            break;
        case 'netmask-c':
            reg = /^255\.255\.255\.0$/;
            msg = "必须为255.255.255.0";
            break;
        case 'domain'://限定了顶级域名必须为.cn/.net/.org等等常见，二级以上域名支持通配符（*.abc.com可以,*.com不可以）
            reg=/^([*]?\.)?([\w-]+\.)+((com)|(net)|(org)|(gov\.cn)|(info)|(cc)|(com\.cn)|(net\.cn)|(org\.cn)|(name)|(biz)|(tv)|(cn)|(mobi)|(name)|(sh)|(ac)|(io)|(tw)|(com\.tw)|(hk)|(com\.hk)|(ws)|(travel)|(us)|(tm)|(la)|(me\.uk)|(org\.uk)|(ltd\.uk)|(plc\.uk)|(in)|(eu)|(it)|(jp))$/;
            msg="格式为 abc.com 或 www.abc.com 或 *.abc.com";
            break;
        case 'domainex'://比domain还限制了.com.cn、.org.cn这类情况
            reg=/^(?!(((com)|(net)|(org)|(gov\.cn)|(info)|(cc)|(com\.cn)|(net\.cn)|(org\.cn)|(name)|(biz)|(tv)|(cn)|(mobi)|(name)|(sh)|(ac)|(io)|(tw)|(com\.tw)|(hk)|(com\.hk)|(ws)|(travel)|(us)|(tm)|(la)|(me\.uk)|(org\.uk)|(ltd\.uk)|(plc\.uk)|(in)|(eu)|(it)|(jp))$))(\*\.)?([\w-]+\.)+((com)|(net)|(org)|(gov\.cn)|(info)|(cc)|(com\.cn)|(net\.cn)|(org\.cn)|(name)|(biz)|(tv)|(cn)|(mobi)|(name)|(sh)|(ac)|(io)|(tw)|(com\.tw)|(hk)|(com\.hk)|(ws)|(travel)|(us)|(tm)|(la)|(me\.uk)|(org\.uk)|(ltd\.uk)|(plc\.uk)|(in)|(eu)|(it)|(jp))$/;
            msg="格式为 abc.com 或 www.abc.com 或 *.abc.com";
            break;
        case "port":  //端口号
            reg=/^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]{1}|6553[0-5])$/;
            msg="格式为1-65535之间的数字";
            break;
        case "vlanid":
            reg=/^([1-9]\d{0,2}|[1-3]\d{3}|40\d[0-4])$/;
            msg="格式为1-4094之间的数字";
            break;
        case "ports":
            reg=/(^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]{1}|6553[0-5])$)|(^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]{1}|6553[0-5])\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]{1}|6553[0-5])$)/;
            msg="端口号格式必须为数值，如果是范围请用冒号分隔，数值范围1-65535";
            break;
        case "syspassex": //操作系统密码
            reg=/^[\x20-\x7e]+$/;
            msg="操作系统的密码格式为键盘上所有可见字符和空格的任意组合";
            break;
        case "syspass": //操作系统密码，严格
            reg=/^(((?!['"\\])[\x21-\x7e]){1,14})$/;
            msg="操作系统的密码格式为任意字母、数字、键盘上的符号(但不包括空格键，单、双引号，\\ 字符)的组合,最长14位";
            break;
        case "posint0":
            reg=/^(0|[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]{1}|6553[0-5])$/;
            msg="格式为0-65535之间的整数";
            break;
        case 'numword8to32':
            reg = /^[0-9a-zA-Z]{8,32}$/;
            msg = "必须为8-32位的字符、数字或字母";
            break;
        case 'numword1to32':
            reg = /^\S{1,32}$/;
            msg = "不能为空，不能包含空格,并且不能超过32位数";
            break;
        case 'numword_1to32':
            reg = /^\w{1,32}$/;
            msg = "必须是数字，字母,并且不能超过32位数";
            break;
        case 'name':
            reg=/^([\u4e00-\u9fa5]|[0-9a-zA-Z]|[_]){1,32}$/;
            msg="必须为字母、数字、汉字或者下划线“_”的组合，最长32位";
            break;
        case 'notice':
            reg = /^(((?!['"\\])([\x21-\x7e]|[\u4e00-\u9fa5])|[\s]|[~￥·×—‘’“”…、。《》【】！（），：；？]){1,32})$/;
            msg = "公告的格式为任意的字母、汉字、汉字标点、数字、英文符号(不包括单、双引号，\\字符)的组合，最长32位";
            break;
        case 'ddnsdomain'://和domain规则区别：不支持通配符
            reg=/^([\w-]+\.)+((com)|(net)|(org)|(gov\.cn)|(info)|(cc)|(com\.cn)|(net\.cn)|(org\.cn)|(name)|(biz)|(tv)|(cn)|(mobi)|(name)|(sh)|(ac)|(io)|(tw)|(com\.tw)|(hk)|(com\.hk)|(ws)|(travel)|(us)|(tm)|(la)|(me\.uk)|(org\.uk)|(ltd\.uk)|(plc\.uk)|(in)|(eu)|(it)|(jp))$/;
            msg="格式为 abc.com 或 www.abc.com";
            break;
        case 'regex':
            var i = $("#"+id).attr('pattern');
            i = i.replace("\\","\\\\");
            reg = new RegExp(i);
            msg = $("#"+id).attr('msg');
            break;
        case 'all':
            reg = /.*/;
            msg = "格式为任意字符";
            break;
    }

    if (stripscript(str)) {
        $("#"+id).css("background","lightGoldenrodYellow");
        alertTools("字符串中包含非法字符，请去除非法字符。", id);
        return false;
    }
    if(!reg.test(str)){
        $("#"+id).css("background","lightGoldenrodYellow");
        return false;
    }else{
        $("#"+id).css("background","white");
        alertTools('',id);      //第一次输入错误会有提示，但是如果修改为正确以后，如果不清空title，仍会显示之前的提示
        return true;
    }
}
//非法字符
function stripscript(s)
{
    var pattern = new RegExp("[%`~#$^&=|{}''\\[\\]<>?！#￥……&（）——|{}【】‘；：”“'。，、？]");
    return s.match(pattern);
}