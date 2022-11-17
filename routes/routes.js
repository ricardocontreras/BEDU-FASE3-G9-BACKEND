const router = require('express').Router();
const authenticate = require('../middlewares/authentication');

router.get('/', (req, res)=>{
    res.redirect('../swagger');
});

router.use('/auth', require('./authRoute'));
router.use('/students', require('./studentRoute'));
router.use('/roles', authenticate, require('./roleRoute'));
router.use('/employees', require('./employeeRoute'));
router.use('/subjects', require('./subjectRoute'));
router.use('/groups', require('./groupRoute'));

module.exports = router