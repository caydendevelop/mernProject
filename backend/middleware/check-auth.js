const HttpError = require("../models/http-error");
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Authorization: "Bearer TOKEN"
    if(!token) { // getting headers.authorization success but cannot find token
      throw new Error('no token found')
    }
    const decodedToken = jwt.verify(token, "supersecret_dont_share");
    req.userData = {userId: decodedToken.userId, userName: decodedToken.userName}
    next();    
  } catch (err) { // getting headers failed
    const error = new HttpError('Authentication failed!', 401);
    return next(error);
  }
  
};