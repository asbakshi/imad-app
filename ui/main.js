//couner code
var button=document.getElementById("counter");
button.onclick = function(){
 
 
 counter= counter+1;
 var span= document.getElementById("connt");
 span.InnerHTML = counter.toString();
}