const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,User,Course}=require("../db/index")
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
    const admin=new Admin({username:username,password:password})
    await admin.save();
    res.status(200).json({message:"Admin created Successfully" })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title
    const description=req.body.description
    const price=parseInt(req.body.description)
    const imageLink=req.body.imageLink
    const course=new Course({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink,
        published: true
    })
    await course.save();
    res.status(200).json(
        {message:"Course Created Successfully",
        courseId:course._id})
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses=await Course.find({})
    res.status(200).json(courses)
});

module.exports = router;