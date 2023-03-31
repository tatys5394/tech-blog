const router = require("express").Router();

// api/post/
router.get('/', async (req, res) => {
    const data = {
        title: "Title",
        content: "Hi. Isn't food great.",
        layout : 'home',
      };
    // res.render('home', data);
    res.render('main', data);
  });

// api/post/
router.post('/', async (req, res) => {
    // res.render('all');
    res.send('PostRoutes Post')
  });

module.exports = router;