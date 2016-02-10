function show(sum){
	var n=5, m=10;
	sum().sum(n,m);
}

show(function (){
	return {
		sum : function(n,m){
			console.log(n+m);
		}
	}
})

