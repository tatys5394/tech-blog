const router = require("express").Router();

// api/user/login
router.get('/login', async (req, res) => {
    const data = {
        layout : 'login',
      };
    res.render('main', data);
  });

// api/user/signup
router.get('/signup', async (req, res) => {
    const data = {
        layout : 'signup',
      };
    res.render('main', data);
  });

// api/user/create
router.post('/create', async (req, res) => {
    const data = {
        layout : 'home', //review
      };
    res.render('main', data);
  });

module.exports = router;