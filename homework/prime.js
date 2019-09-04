function Prime()
	{
		var i,flag=0,number;
        number = Number(document.getElementById("N").value);
        var a = "prime number"
        var b = "not prime number"

		for(i=2; i <= number/2; i++)
		{
			if(number%i == 0)
			{
				flag = 1;
				break;
			}
		}
		if(flag == 0)
		{
            document.getElementById("result").innerHTML=a
            //window.alert("The  number is Prime");
		}
		else
		{
            document.getElementById("result").innerHTML=b
            //window.alert("The  number is not Prime");
		}
	}