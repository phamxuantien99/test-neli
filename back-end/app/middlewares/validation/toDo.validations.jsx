const checkEmty = (req, res, next) => {
    const {description} = req.body
    if(description ){
        next()
    }else{
        res.status(500).send("không đươc để trống")
    }
}


module.exports = {
    checkEmty
}