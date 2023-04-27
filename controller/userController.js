const db = require("../model")
const bcrypt = require("bcryptjs")

const Users = db.User


const addUser = async (req, res) => {
    let password = req.query.password
    let salt = await bcrypt.genSalt(10)
    let hashPassword = await  bcrypt.hash(password, salt)
    console.log(hashPassword)

    let info = {
        username: req.query.username,
        password: hashPassword,

    }

    const User = await Users.create(info)
    res.status(200).send(User)
}



const loginUser = async (req, res) => {
    let compare = false
    check = await Users.findOne({where : {username: req.body.username}})
    if (check != null){
        compare = await bcrypt.compare(req.body.password, check.password)
    }
        

    
    if (compare == true){
        console.log("valider")
        res.status(200).send(true)

    }else{
        console.log("refuser")
        res.status(200).send(false)
    }
    
   

}

module.exports = {
    addUser,

    loginUser,

}