import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;
    
    if(!bearer) {
        res.status(401);
        res.json({message: bearer});
        return;
    }

    const [, token] = bearer.split(' ');

    if(!token) {
        res.status(401);
        res.json({message: 'not valid token'});
        return;
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({message: 'something went wrong'});
        return;
    }
}