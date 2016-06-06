//these are the variables
var runButton = document.getElementById("runButton")
var display = document.getElementById("display");


//these are the possible items to choose from
var beagleImg = "<img class='pic' src='http://www.animaroo.com/assets/sites/animaroo.com/img/breeds/img/beagle_medium.jpg?1355978424' />"
var borderImg = "<img class= 'pic' src ='http://nextranks.com/data_images/dogs/border-collie/border-collie-01.jpg' />"
var pitbullImg = "<img class= 'pic' src =' http://www.melovemypet.com/wp-content/uploads/2014/05/Bluenosepitbullpuppy1.jpg'/>"
var labImg = "<img class= 'pic' src ='http://www.dogstardaily.com/files/styles/medium/public/images/bio/lab_puppy.jpg?itok=EXAV43yz'/>"
var austrlianImg = "<img class= 'pic' src ='https://s-media-cache-ak0.pinimg.com/736x/68/ce/98/68ce9861c155895dfbfce5a80b2a1f3c.jpg'/>"
var bulldogImg = "<img class= 'pic' src ='http://i.huffpost.com/gen/2709324/images/o-BULLDOG-PUPPY-facebook.jpg'/>"
var pictures = [beagleImg, borderImg,pitbullImg,labImg,austrlianImg, bulldogImg ]
    //this carries out the described function    
runButton.addEventListener("click", function() {
    if ("click") {
        var randNum = Math.floor((Math.random() * (pictures.length)) + 0)
        display.innerHTML = pictures[randNum];
    }
});