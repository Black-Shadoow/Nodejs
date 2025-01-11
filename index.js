// Import the User model
const User = require('./user.js');
const add= require('./math.js')

// Create a new user instance
const user = new User("Bibek", 25, "bibek@example.com");

// Use the model's method
console.log(user.getDetails());
console.log("The sum of two number is ",add(5,8));
