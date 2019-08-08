import jwt from 'jsonwebtoken'
import config from 'config'

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    // check token
    if(!token){
       return res.status(401).json({msg: 'No token, authorization denied.'});
    }

    // verify token
    try {
        const decoded = jwt.verify(
            token,
            config.get('jwtToken')
        );
        req.user = decoded.user;
        next();
    }catch (err) {
        return res.status(401).json({msg: 'Token, is not valid.'});
    }
};

module.exports = auth;