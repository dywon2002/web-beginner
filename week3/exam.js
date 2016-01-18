var num = 5/2;
console.log(num);
console.log(Math.floor(num));

var str = 'test';
console.log(str[0],str[1],str[2],str[3]);
str[0] = 'T';
console.log(str);

var nullVar = null;
console.log(typeof nullVar===null);

var foo = new Object();

foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);
console.log(foo);