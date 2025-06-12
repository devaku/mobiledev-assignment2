let users = [
	{
		username: 'username',
		password: 'Password1!',
	},
	{
		username: 'johnDoe',
		password: 'PassworD@123',
	},
	{
		username: 'janeSmith',
		password: 'Secure!456',
	},
	{
		username: 'mikeBrown',
		password: 'Test#7890',
	},
];

let values = users.reduce((gainer, current) => {
	gainer.push(current.username);
	return gainer;
}, []);

console.log('ENDER');
console.log(values);
