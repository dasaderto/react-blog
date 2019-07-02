const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

exports.registration = async function (req, res) {
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const user = await User.findOne({
        login: req.body.login
    });

    if(user) {
        return res.status(400).json({
            uniqueLogin: 'Пользователь с таким именем уже существует'
        });
    }else{
        const newUser = new User({
            login: req.body.login,
            password: req.body.password,
        });

        bcrypt.genSalt(10, (err, salt) => {
            if(err) console.error('There was an error', err);
            else {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) console.error('There was an error', err);
                    else {
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                res.json(user);
                            });
                    }
                });
            }
        });
    }
};

exports.login = async function (req, res) {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const login = req.body.login;
    const password = req.body.password;

    const user = await User.findOne({
        login
    });

    if(!user) {
        errors.login = 'Пользователь не найден';
        return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch) {
                const payload = {
                    id: user.id,
                    login: user.login,
                    avatar: user.avatar
                };
                jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: 3600
                }, (err, token) => {
                    if(err) console.error('There is some error in token', err);
                    else {
                        res.json({
                            success: true,
                            token: `Bearer ${token}`
                        });
                    }
                });
            }
            else {
                errors.password = 'Некорректные данные';
                return res.status(400).json(errors);
            }
        });
};

exports.auth = async function (req, res) {
    return res.json({
        id: req.user.id,
        login: req.user.login,
    });
};