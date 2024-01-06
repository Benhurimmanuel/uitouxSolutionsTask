const jwt = require('jsonwebtoken')
const generateAccessToken = (userId, userEmail, userAccountType,) => {
    const accessToken = jwt.sign(
        {
            userId: userId,
            email: userEmail,
            accountType: userAccountType,
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' },
    );
    return accessToken;
};

module.exports = { generateAccessToken }