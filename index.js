// Import the User model
const User = require('./user.js');
const { add, sub, mul, div } = require('./math.js'); 

// Create a new user instance
const user = new User("Bibek", 25, "bibek@example.com");

// Use the model's method
console.log(user.getDetails());
console.log("The sum of two number is ",add(5,8));
console.log("The diffirence of two number is ",sub(56,8));
console.log("The mul of two number is ",mul(5,8));
console.log("The div of two number is ",div(40,8));
