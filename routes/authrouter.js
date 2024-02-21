const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, addUser } = require('../controllers/authcontroller');

router.use(
    cors({
        origin: 'http://localhost:3000',
        credentials : true
    })
)

router.get('/',test);
router.post('/adduser',addUser);

module.exports=router;