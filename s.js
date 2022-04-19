 
 var timer;
 var imges=["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg" ];
 var i=0;
 function startSlider(){
    timer=setInterval(function(){
     i++;
     if(i>4){
     i=0;}
     document.images[0].src = imges[i];
 },1000)
 
 }
  function stopSlider(){
     clearInterval(timer)
     document.images[0].src =imges[i];
 }
 document.getElementById("forward").addEventListener("click", function(){
     
         i++;
         if(i>5){
         i=0;}
         document.images[0].src =imges[i];
 
 
 
 })
 document.getElementById("back").addEventListener("click", function(){
     
     i--;
     if(i<0){
     i=5;}
     document.images[0].src = imges[i];
 
 
 
     })