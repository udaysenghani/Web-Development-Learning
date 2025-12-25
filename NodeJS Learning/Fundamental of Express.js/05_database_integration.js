/******************************************************************
 DATABASE INTEGRATION (MONGODB)
******************************************************************/

const mongoose = require('mongoose');

/*
Connecting to database
Connection stays open
*/
mongoose.connect('mongodb://localhost:27017/appdb');

/*
Schema defines DATA SHAPE in models folder
*/
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

/*
Model = Interface to DB
*/
const User = mongoose.model('User', userSchema);

/*
CRUD FLOW:
Request → Controller → Model → DB
*/
async function createUser() {
  const user = await User.create({
    name: 'Alice',
    email: 'alice@test.com'
  });
  console.log(user);
}

createUser();
