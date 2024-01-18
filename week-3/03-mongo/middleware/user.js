async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username=req.body.username
    const password=req.body.password
    const details=await User.findOne({username:username})
    if(username==details.username && password==details.password){
        next();
    }
    else{
        res.status(403).JSON({error:"Username & Password Invalid"})
    }
}

module.exports = userMiddleware;