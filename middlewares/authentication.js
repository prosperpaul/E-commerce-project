const regAuthentication = (req, res, next) => {
    const { username, password, email } = req.body

    let errors = []


   // email check
    if(!email) {
        errors.push("please enter your email")
    }
    else if(!validateEmail(email)){
        errors.push('enter a valid email address')
    }

    // password check 
    if(!password){
        errors.push('please enter your email')
    } else if(password.length < 8){
        errors.push('password should be at least 8 characters long')
    } else if(!/[0-9]/.test(password)){
        errors.push('password should contain numbers')
    } else if(!/[A-Z]/.test(password)){
        errors.push('password should contain uppercase')
    }else if(!/[a-z]/.test(password)){
        errors.push('password should contain lowercase')
    } else if(!/[@.#$!%*?&]/.test(password)){
        errors.push('password should contain special characters')
    }
 
    // username check
    if(!username){
        errors.push('please enter your username')
    }

    if(errors.length > 0){
        return res.status(400).json({ message: errors })
    }

    next()
}

const loginAuthentication = (req, res, next) => {
    const { username, password, email } = req.body

    if(!username && !password && !email){
        errors.push('please provide your login information.')
    }

    // check if password is empty
    if(!password){
        errors.push('please enter your password.')
    }
    // check if username field is empty
    if(!username){
        errors.push('please enter your username.')
    }
    // check if email field is empty
    if(!email){
        errors.push('please provide your email address')
    }
    if(!validateEmail(email)){
        error.push('please enter a valid email address.')
    }

    if(errors.length > 0){
        return res.status(400).json({ message: errors })
    }

    next()

}

const validateEmail = (email) => {
    const emailRegExPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegExPattern.test(email)
}


module.exports = {
    regAuthentication,
    loginAuthentication,
    validateEmail
}