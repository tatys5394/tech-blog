const router = require("express").Router();
const {Post}=require("../../model/index")

// api/get/
router.get('/', async (req, res) => {
    const data=await Post.findAll()
    console.log(data)
    // res.render('home', data);
    // res.render('main', data);
    res.status(200).json({data})
  });

// api/post/
router.post('/', async (req, res) => {
    // res.render('all');
    res.send('PostRoutes Post')
  });

module.exports = router;