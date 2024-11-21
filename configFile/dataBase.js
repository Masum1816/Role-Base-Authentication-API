
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://masummangukiya1816:5K3e5juevrIno9Ph@masum.j7rm2.mongodb.net/').then(() => {
    console.log("MongoDb Connected");
}).catch((err) => {
    console.log("ERROR : ", err);
})

module.exports = mongoose;








