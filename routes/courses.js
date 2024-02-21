const ex=require("express")
const {route} =require("express/lib/application")
const Course=require("../models/course")
const router=ex.Router()

router.get('/courses', async (req, res) => {
    try {
      const courses = await Course.find(); // Find all courses in the database
      res.json(courses); // Send the courses as a JSON response
    } catch (err) {
      console.error('Error fetching courses:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
router.get("/:courseid", async(req,res)=>{
    const courseId=req.params.courseid
    try{
        const c=await Course.findById(courseId)
        res.json(c)

    }
    catch(error)
    {   
        console.error('Error fecting courseid')
        res.status(500).json({error:'Internal server error'});
      
    }
})

router.post('/', async(req,res)=>{
const course=await Course.create(req.body)
res.json(course)

})

router.delete('/:id', async (req, res) => {
    try {
      const courseId = req.params.id; // Extract course ID from request params
  
      // Find the course by ID and delete it
      const deletedCourse = await Course.findByIdAndDelete(courseId);
  
      if (!deletedCourse) {
        return res.status(404).json({ error: 'Course not found' });
      }
  
      res.json({ message: 'Course deleted successfully', deletedCourse });
    } catch (err) {
      console.error('Error deleting course:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  router.put('/:id',  async (req,res)=>{

    const courseId=req.params.id
    
    try{
       const course= await Course.updateOne(
        {
           "_id":courseId
        },
        req.body
        )
        res.json(course)
    }
    catch(error){
    
        res.json(error);
    }
    
    
      })
    

module.exports=router