const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    try{

        // authorization logics ...
        const authHeaders = req.headers.authorization;

        if(!authHeaders || !authHeaders.startsWith("Bearer ")){
            return res.status(401).json({message: "Unauthorized: Token Not Found"});
        }

        const token = authHeaders.split(" ")[1];
        
        const decoded = jwt.verify(token, process.env.jwt_secret);

        next();

    }catch(err){
        return res.status(401).json({message: "Invalid Token"});
    }
}

module.exports = authMiddleware;    