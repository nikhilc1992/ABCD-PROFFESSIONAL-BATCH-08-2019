var a,b,c=0
a=234
while (a>0)
{
    b=a%10
    c=(c*10)+b
    a= parseInt (a/10) // avoid floating points.
}
console.log(c)