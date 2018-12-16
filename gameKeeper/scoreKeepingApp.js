

var b1 = document.getElementById("bu1");
var b2 = document.getElementById("bu2");
var reset = document.getElementById("reset");

var ps1= document.querySelector("#s1");
var ps2= document.querySelector("#s2");
var input = document.querySelector("input");
//var p = document.querySelector("h3");
var winnigUpto = document.querySelector("h3 span"); 
var gameover = true;
var p1 = 0;
var p2 = 0;


var max = 3;

b1.addEventListener("click", function(){


 if (p1 !== max && p2 != max && gameover) {

 	p1++;

	ps1.textContent= p1;
	
	if(p1 === max){
		gameover = false;
		ps1.style.color = "red";
	}

 }
	
});

b2.addEventListener("click",function(){


 if (p1 !== max && p2 != max && gameover) {

 	p2++;

	ps2.textContent= p2;
	
	if(p2 === max){
		gameover = false;
		ps2.style.color = "red";
	}

 }


}); 
 

reset.addEventListener("click" , function(){

p1 =0;
p2 =0;

ps1.textContent= 0;
ps2.textContent = 0;
gameover = true;
max =3;
input.value = 0;
winnigUpto.textContent = "3";
ps1.style.color = "black";
ps2.style.color = "black";
});


input.addEventListener("change" , function(){
  
  
   winnigUpto.textContent = input.value;
   
   max = Number(input.value);

});