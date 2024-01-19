// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username=req.headers.username
    const password=req.headers.password
    const details=await Admin.findOne({username:username})
    if(username==details.username && password==details.password){
        next();
    }
    else{
        res.status(403).JSON({error:"Username & Password Invalid"})
    }

}

module.exports = adminMiddleware;