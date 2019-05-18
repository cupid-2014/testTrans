// 获取所有参数中具体的某个参数
GetParamStr = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) 
      return decodeURI(r[2]);
    return null;
}

// 获取所有参数值
GetTransStr = function() {
    return window.location.search.substr(1);
}