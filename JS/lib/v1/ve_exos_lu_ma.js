


function add(v1,v2) {return v1+v2}

function multi(v1,v2){return v1*v2}

function div(v1,v2){return v1/v2}

function sub(v1,v2){return v1-v2}

	var sapvar1 = 5;
	result= add(2,sapvar1);
	console.log(sapvar1);
	console.log(result);
	t = [];
	t;


for(var i=1;i<100;i++) t.push(i);

console.log(t);


"use strict";

var com={};
com["sapui"]={};
com.sapui.calculator={};
var calc = com.sapui.calculator;
calc.screen=0;
calc.memory=0;

var add = function (v1,v2) {return v1+v2};
var multi = function (v1,v2){return v1*v2};
var div = function (v1,v2){return v1/v2};
var sub = function (v1,v2){return v1-v2};

calc.screen=add(1,3)

function myfct(){console.log("coucou")}
var obj1 = new myfct()

function Mytable(nlgs,col,h){
	this.nlegs=nlgs;
	this.color=col;
	this.height=h;
	this.addition=add;
	console.log("legs",this.nlegs, "couleur",this.color,"hauteur",this.height)
};
var table1 =new Mytable(4,"#FF0000",95);


function Voiture(c,m){
	this.color = c;
}

Voiture.prototype={
	conso: "5",
	moteur: "110",
	conso_f: function(){
		console.log("ma conso: " ,  this.conso)
	}
}

var classeA = new Voiture(8,120);

classeA;
classeA.__proto__.conso_f;
classeA.__proto__.conso_f();
classeA.conso_f;
 
var addcolors= function(colors){
	this.intColor=colors.intColor,
	this.extColor=colors.extColor
}
 
var colors= {intColor:"white",
extColor:"green"};

addcolors.call(classeA,colors);

calc.screen=0;
var mem = calc.mem={};
mem.history={pv2:0,pv1:0,v:0};
mem.mplus=function(valueToSave){
	this.pv2=this.pv1;
	this.pv1=this.v;
	this.v+=valueToSave;
};
mem.mminus=function(valueToRemove){
	this.pv2=pv1;
	this.pv1=this.v;
	this.v-=this.valueToRemove;
};
mem.memshow=function(){
	calc.screen=this.v;
};
calc.clear=function(){
	calc.screen=0;
}

var ops=calc.ops={}
ops.add=function(v1,v2){
	calc.screen= v1+v2;
}
ops.multi=function(v1,v2){
	calc.screen= v1*v2;
}

console.log(calc);






