const getAllUsers = (req, res, next) =>{
    try {
        res.send('from controller');
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllUsers}