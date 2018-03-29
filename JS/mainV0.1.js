"use strict";
document.write("hello");

var filepaths = [js/lib/sapui-core-v-10.js , js/lib/calculator-core-v-10.js , js/lib/calculator-core-v-02.js];
var script = document.createElement('script');
for (var i=0; i<filepaths.length;i++){
	script.src = filepaths[i];
	document.write(script.outerHTML)
}
