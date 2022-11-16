const router = require('express').Router();

router.get('/', (req, res)=>{
    res.redirect('../swagger');
});

router.use('/students', require('./studentRoute'));
router.use('/roles', require('./roleRoute'));
router.use('/employees', require('./employeeRoute'));
router.use('/subjects', require('./subjectRoute'));
router.use('/groups', require('./groupRoute'));

module.exports = router