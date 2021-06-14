
const User =require('../models/user') ;

const addNewUser = async(req, res) => {
    const newUser= new User(req.body);
    try{
        const user= await newUser.save()
        res.json({user: user});
    }
    catch(err){
        console.log(err);
    }
}

const getAllUsers = async(req, res) => {
       await User.find()
        .then(users => {
            res.status(200).json({users: users});
            console.log("user find");
        }).catch(err => {
            console.log(err);
            console.log("error");
        })
}

module.exports= {addNewUser, getAllUsers};
