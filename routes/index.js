const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('<h1>Welcome to school API</h1>');
});

router.use('/student', require('./studentRoute'));

module.exports = router