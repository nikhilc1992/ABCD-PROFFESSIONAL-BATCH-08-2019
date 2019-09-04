function reverse()
{


var number,b,c=0
var number = Number(document.getElementById("N").value);
while (number>0)
{
    b=number%10
    c=(c*10)+b
    number= parseInt (number/10) // avoid floating points.
}
document.getElementById("result").innerHTML= c
}
