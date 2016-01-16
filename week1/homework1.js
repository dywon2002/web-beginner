 	  function makeDiamond(number){

	   for(var i=1; i<=number;i++)
	   {
	    for(var j=number-1; j>=i; j--)
	     process.stdout.write(" ");
	    for(var k=1; k<=i*2-1;k++)
	     process.stdout.write("*");
	    console.log("");
	   }
	  
	   for(var i=1; i<=number-1; i++)
	   {
	    for(var j=1; j<=i; j++)
	     process.stdout.write(" ");
	    for(var k=2*(number-2)+1; k>=i*2-1;k--)
	     process.stdout.write("*");
	    console.log("");
	}
};

makeDiamond(5);
makeDiamond(3);
makeDiamond(4);