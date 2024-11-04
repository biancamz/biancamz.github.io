let my_var= 100;
var my_other_var= "jello world";
const this_is_a_constant= "constant";
console.log("hello world")


alert("this is an alert");

//how to interact with the DOM
console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked the h1");
    document.getElementById("paragraph").innerHTML="this is the new text";
    document.getElementById("paragraph").style.color="blue";
    document.getElementById("image").src= "img/cheetah.jpg";
})

console.log(document.getElementById("my_head").innerHTML);
