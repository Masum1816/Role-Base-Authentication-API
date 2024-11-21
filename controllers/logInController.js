const registerUserSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const logInPostController = async (req, res) => {

    console.log("LOGIN POST CONTROLLER");

    try{

        const {name, email, password, role}= req.body;
        console.log('Registering user with role:', role); 
        const hasedPass = await bcrypt.hash(password , 10);
   
        const newUser = new User({
           name,
           email,
           password : hasedPass, 
           role
        });
        await newUser.save();
        res.status(200).json({message : "User created successfully",newUser})
    }catch(err){
        res.status(400).json({message : err.message});
    }


}

const registerController = async (req, res) => {

    console.log("REGISTER CONTROLLER");
    
    try{
        const {username , password}= req.body;

        
        const user = await registerUserSchema.findOne({username});
        console.log(user.role);

        if(!user){
            return res.status(404).json({message : "user Not Found"})
        }

        const ismatch = await bcrypt.compare(password, user.password);
        if(!ismatch){
            return res.status(400).json({message : "Invalid Password"});
        }

        const token = jwt.sign(
            {id:user._id , role:user.role},
            'secretKey',
            {expiresIn : "1h"}
        );
        res.status(200).json({token , user})

    }catch(err){
        res.status(400).json({message : err.message});
    }

}

module.exports = { logInPostController, registerController };








