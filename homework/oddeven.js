function oddeven()
{
    var a = "odd number"
    var b = "even number"
    var number = Number(document.getElementById("N").value)
if (number%2==0)
{
    document.getElementById("result").innerHTML=b
}
else{
    document.getElementById("result").innerHTML = a
}
}