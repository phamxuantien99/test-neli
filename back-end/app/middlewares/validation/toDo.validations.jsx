const checkEmty = (req, res, next) => {
    const {description, isFinish} = req.body
    if(description && isFinish){
        next()
    }else{
        res.status(500).send("không đươc để trống")
    }
}


module.exports = {
    checkEmty
}