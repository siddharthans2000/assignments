const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
    const user=new User({username:user,password:password})
    user.save();
    res.status(200).json({message:"Admin created Successfully" })
});

router.post('/courses', adminMiddleware, (req, res) => {
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
    course.save();
    res.status(200).json({message:"Course Created Successfully",
courseId:})
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic


});

module.exports = router;