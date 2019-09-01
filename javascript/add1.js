function addition() 
{
    var n= parseInt (document.getElementById('num1').value)
    var r=  parseInt(document.getElementById('num2').value)
    var sum = n+r
    console.log(sum)
    document.getElementById("result").innerHTML=sum // result id given at display point
    

}