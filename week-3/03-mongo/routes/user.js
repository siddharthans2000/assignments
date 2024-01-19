const { Router } = require("express");
const router = Router();
const {Admin,User,Course}=require("../db/index")
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username=req.body.username
    const password=req.body.password
    const user=new User({
        username:username,
        password:password
    })
    await user.save()
    res.status(200).json({message:"User created successfully"})
});

router.get('/courses', userMiddleware,async (req, res) => {
    // Implement listing all courses logic
    const courses=await Course.find()
    res.status(200).json(courses)
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username=req.headers.username
    const id=req.query.courseId
    const course=await Course.findOne({_id:id})
    const person=await User.findOne({username:username})
    await person.purchasedCourse.push(course);
    res.status(200).json({message:"Course Purchased Successfully"})
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers.username
    const courses=await Person.findOne({username:username}).populate("purchasedCourses")
    res.status(200).json(courses)
});

module.exports = router