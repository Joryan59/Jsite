function intro(){
    alert("button pushed");
}
function helloname(){
 let name = prompt("insert name");
 alert("hello " + name);   
}

function colourname(){
   let colour = prompt("what colour am i thinking? Red, green, or blue?");
   if (colour == "green") { 
    alert("Correct"); 
   } else { 
       alert("Incorrect");
}
}
function foundme(){
    console.log("yahahaha"); 
    alert("check the console")
}
function seasonsandday() {
    var birthday = prompt("What is your birthday");
    var season = prompt("What is your favourite season");
    let BSanswer = "Your Birthday is "+birthday+" your Season is "+season+""
    document.getElementById("seasonquestion").innerHTML = BSanswer;  
}

function equations(m1, m2){
    return m1 * m2;
}
document.getElementByID("equationanswer").innerhtml = equations(5, 45); 

function name(params) {
    
}
function name(params) {
    
}
function name(params) {
    
}
function UWS2signs(){
    let S2signs = ["squid", "octopus", "salmon"];
    document.getElementById("UWsigns").innerHTML = S2signs;
} 

 