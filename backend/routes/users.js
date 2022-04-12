const router = require('express').Router();
const { usernameAndAboutValidation, avatarValidation, validateUserId } = require('../middlewares/validation');
const {
  getUsers,
  getUsersById,
  getCurrentUser,
  updateUserInfo,
  updateAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/me', getCurrentUser);
router.get('/users/:userId', validateUserId, getUsersById);
router.patch('/users/me', usernameAndAboutValidation, updateUserInfo);
router.patch('/users/me/avatar', avatarValidation, updateAvatar);

module.exports = router;
