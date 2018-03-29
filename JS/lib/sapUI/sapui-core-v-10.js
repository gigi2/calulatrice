//all commun functions to configure modules

"use strict";
window["com"]={};

// $ is alias for com.sapui
var $=com.sapui={v:10};

$.initStructure=function (libPath){
    var root = window
    var structure=libPath.split(".")
    for (var i = 0; i < structure.length; i++) {
        root[structure[i]]=root[structure[i]]||{}
        root= root[structure[i]];
        }
};

$.initConf=function(){
for(var y=0; y<conf.modules.length;y++){
    var mod=conf.modules[y];
    if(mod.active==true){
    for(var z=0; z<conf.modules[y].src.length;z++){
        var script = document.createElement('script');
        script.src = mod.rootpath+mod.src[z];
        document.write(script.outerHTML)
    }
    }
}
}

$.initConf();
