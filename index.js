function myFunction()
{
var a=document.getElementById("text_a").value;

var b = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bundesstra%C3%9Fe_433_number.svg/1200px-Bundesstra%C3%9Fe_433_number.svg.png"
if (a=="njalahaki")
  {
    document.getElementById("answer").innerHTML="IT IS THE LINK!!!";
    document.getElementById("answer").href=b;
  }
else
  {
document.getElementById("answer").innerHTML="WRONG CODE!";
  }
}