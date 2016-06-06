function fadeOut(id, speed){
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");


var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");


item1.addEventListener("click", function(){
    info1.innerHTML = "I love basketball so much it is one of my most favorite sports ever. ";
    info2.innerHTML = "basketball ";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "I love football so much";
    info2.innerHTML = "It's the greatest sport ever";
});

item3.addEventListener("click", function(){
    info1.innerHTML = "I love soccer so much";
    info2.innerHTML = "It's  the greatest sport ever";
});
                       