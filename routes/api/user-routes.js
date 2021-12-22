const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    addFriend,
    deleteFriend,
    deleteUser
  } = require('../../controllers/user-controller');

  // Set up GET all and POST at /api/users
// /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  // Set up GET one, PUT, and DELETE at /api/users/:id
// /api/users/:userId/friends/:frinedId
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)

  router
  .route('/:userId/friends/:friendId')
  .delete(deleteFriend);
  
module.exports = router;