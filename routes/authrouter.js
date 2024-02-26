const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, addUser, viewUser } = require('../controllers/authcontroller');

router.use(
    cors({
        origin: 'https://employee-frontend-beige.vercel.app',
        credentials : true
    })
)

router.get('/',test);
router.post('/adduser',addUser);
router.get('/viewUser',viewUser);

module.exports=router;