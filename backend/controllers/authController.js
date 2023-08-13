const User = require("../models/userModel")
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    const { username, email, password } = req.body

    const isEmailExists = await User.findOne({ email })
    if (isEmailExists) return res.json({error: "Email already exists"})

    const isUsernameExists = await User.findOne({ username })
    if(isUsernameExists) return res.json({error: "Username is not available"})

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username, email, password:hashedPassword
    })
    res.status(200).json(user);
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user && await bcrypt.compare(password, user.password)) res.status(200).json({ success: true, user })
        else (res.json({ success: false, error: "Incorrect email or password!" }))
    } catch (error) {
        res.json({ error: error.message });
    }
}

module.exports = {
    register,
    login
}