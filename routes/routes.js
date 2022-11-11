const router = require('express').Router();

router.get('/', (req, res)=>{
    res.redirect('../swagger');
});

router.use('/Users', require('./userRoute'));

module.exports = router