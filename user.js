class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}

// Export the User class
module.exports = User;
