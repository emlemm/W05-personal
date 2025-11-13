const getToken = async (req, res, next) => {
    res.status(200).json({access_token: "your token", token_type: "Bearer"})
}

module.exports = { getToken }