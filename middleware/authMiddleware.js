const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.cookies.token; // Get token from cookies
    if (!token) return res.redirect("/auth/login");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.redirect("/auth/login");
    }
};
