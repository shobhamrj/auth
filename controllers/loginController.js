const User = require('../models/User')
const bcrypt = require('bcrypt')
const {hash} = require("bcrypt");
const signUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if(!firstName || !lastName || !email || !password) {
        return res.status(400).send('All fields are required!')
    }
    await User.findOne({email: email})
        .then((user) => {
            if(user) {
                return res.status(400).send('Email already exists!')
            } else {
                const newUser = new User({
                    firstName,
                    lastName,
                    email,
                    password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash
                        newUser.save()
                            .then(() => {
                                return res.status(200).send('User registered successfully')
                            })
                            .catch((e) => {
                                console.error('Error registering user:', e);
                                return res.status(500).send('An error occurred while registering the user: ', e)
                            })
                    })
                })
            }
        }).catch((e) => {
            console.error('Error registering user:', e);
            return res.status(500).send('An error occurred while registering the user: ', e)
    })
}

const signIn = async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).send('All fields are required!')
    }
    await User.findOne({ email: email })
        .then((user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err
                    if(isMatch) {
                        return res.status(200).send('User Signed In')
                    } else {
                        console.error('Wrong Password !');
                        return res.status(401).send('Wrong Password !')
                    }
                })
            } else {
                res.status(401).send('Invalid email!');
            }
        })
        .catch((error) => {
            console.error('Error signing in:', error);
            res.status(500).send('An error occurred while signing in');
        });
};

module.exports = {
    signIn,
    signUp
}