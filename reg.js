var myInp = document.querySelector("input");

myInp.onfocus = function () {

    document.querySelector("input").style.outline= "none" ;
    document.querySelector("input").style.border = " solid 2px blue" ;
}

myInp.onblur = function () {
    var inpValue = myInp.value;
   "";
 document.getElementsByTagName("span")[0].innerHTML = 
    document.getElementById("fname").style.backgroundColor = "white";

    if (inpValue.length <= 3) {
        document.getElementsByTagName("span")[0].innerHTML = "invalid name";
        document.getElementById("fname").style.backgroundColor = "grey";
    }
}
var passInp1 = document.getElementById("pas1")
var passInp2 = document.getElementById("pas2");

passInp2.onblur = function () {
    var valPass1 = passInp1.value;
    var valPass2 = passInp2.value;
    console.log(valPass1);
    console.log(valPass2);
    document.getElementsByTagName("span")[1].innerHTML = "";
    if (valPass2 != valPass1) {

        document.getElementsByTagName("span")[1].innerHTML = "password not valid";

      
    }
}

function validate(ev) {
    ev.preventDefault();
    var inpValue = myInp.value;
    var valPass1 = passInp1.value;
    var valPass2 = passInp2.value;
    if (valPass2 != valPass1 || inpValue.length <= 3) {

        ev.preventDefault();

    }


    else{

document.forms[0].submit();
      
    }
   
}






var myLi = document.getElementsByTagName("li");
myLi.forEeach(li)
















var inputs =document.querySelectorAll("input");


inputs.forEach((ele) => {
    ele.onfocus = function () {

        document.querySelector("input").style.outline= "none" ;
        document.querySelector("input").style.border = " solid 2px blue" ;
    }
  });


ele.onfocus = function () {

    document.querySelector("input").style.outline= "none" ;
    document.querySelector("input").style.border = " solid 2px blue" ;
}