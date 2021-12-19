const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// add prefix of `/thoughts` to routes created in `thoughts.js`
router.use('/thoughts', thoughtRoutes);
// add prefix of `/user` to routes created in `users.js`
router.use('/users', userRoutes);

module.exports = router;
