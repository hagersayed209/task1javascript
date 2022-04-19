var x;
var arr=["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
var i=0;
function stSlider(){
 x=setInterval(function(){
    i++;
    if(i>4){
    i=0;}
    document.images[0].src = arr[i];
},1000)

}
 function stopSli(){
    clearInterval(x)
    document.images[0].src =arr[i];
}
document.getElementById("next").addEventListener("click", function(){
    
        i++;
        if(i>4){
        i=0;}
        document.images[0].src = arr[i];



})
document.getElementById("prev").addEventListener("click", function(){
    
    i--;
    if(i<0){
    i=4;}
    document.images[0].src = arr[i];



})
