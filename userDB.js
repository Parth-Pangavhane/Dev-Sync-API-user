require('dotenv').config();
const connectDB = require('./db/connect');
const User = require('./models/user');
const userJson = require('./user.json');

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);

        // Creating a new user using the User model
        await User.create(userJson);
        console.log('Success');
    } catch (error) {
        console.error(error);
    }
};

start();