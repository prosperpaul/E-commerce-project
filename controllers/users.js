const bcrypt = require('bcrypt')

const {
    userModelSchema
} = require('../model/schema')


const login = async(req, res)=>{
    res.json({message:'login'})
}

const registration = async(req, res)=>{
    const { username, password, email } = req.body

    try{
        // const user = new userModelSchema({ username, password, email })
        // await user.save()

        // check if email already exist in database
        const emailExist = await userModelSchema.findOne({ email })
        
        if(emailExist){
            return res.status(400).json({ message: 'sorry email already in use.' })
        }

        // check if username already in use
        const usernameExist =  await userModelSchema.findOne({ username })
        if(usernameExist){
            return res.status(400).json({ message: "sorry username already in use."  })
        }

        // hash user password
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await userModelSchema.create({ username, password: hashedPassword, email })
        res.status(200).json({ message: 'successful', user })


    } catch(error){
        return res.status(500).json({message:error.message})
    }
}

const users = async(req, res)=>{
    res.json({message:'users'})
}


module.exports = {
    users,
    login,
    registration
}