const router = require('express').Router();
const authenticate = require('../middlewares/authentication');

router.get('/', (req, res)=>{
    res.redirect('../swagger');
});

router.use('/auth', require('./authRoute'));
router.use('/students', authenticate, require('./studentRoute'));
router.use('/roles', authenticate, require('./roleRoute'));
router.use('/employees', authenticate, require('./employeeRoute'));
router.use('/subjects', authenticate, require('./subjectRoute'));
router.use('/groups', authenticate, require('./groupRoute'));

module.exports = router