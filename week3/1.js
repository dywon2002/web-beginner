var obj = {};
obj.name = '배열';
obj.age = 10;
console.log('속성 : 값');
for(var j in obj){
	console.log(j+':'+obj[j]);
}