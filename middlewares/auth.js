let jwt = require('jsonwebtoken');
const config = require('../config.js');

const checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token) {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        jwt.verify(token, config.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.send(err);
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            success: false,
            message: 'У вас недостаточно полномочий для совершения данного действия'
        });
    }
};

module.exports = checkToken;