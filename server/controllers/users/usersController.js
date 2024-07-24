const User = require('../../model/User')
const bcrypt = require('bcrypt')

exports.registerUser = async (req, res) => {
    console.log(req.params);
    const { username, email, password, repass } = req.body
    // const salt = bcrypt.genSaltSync(10)
    // const hashedPass = await bcrypt.hash(password, salt)

    try {
        await User.create({ username: username, email: email, password: password })
    } catch (error) {
        console.log(error);
    }

    return res.status(200).json({ message: 'String done' })
}

