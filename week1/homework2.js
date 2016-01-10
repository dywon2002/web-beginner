function sumLineNum(num){
	var sum = 0;
	while(num>0){
		sum += num%10;
		num = Math.floor(num/10);
	}
	console.log(sum);
};

sumLineNum(54321);
sumLineNum(543);