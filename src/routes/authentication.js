import express from 'express'
import passport from 'passport'
import { readAllUsers, readOneUser, createUser, updateUser, deleteUser, loginUser } from '../controllers/user.controller'

const router = express.Router()

/* /users END POINT */
router.route('/users')
  .get(readAllUsers)
  .post(createUser)

router.route('/users/:id')
  .get(readOneUser)
  .put(updateUser)
  .delete(deleteUser)

//login route
router.route('/users/login')
  .post(passport.authenticate("local"),loginUser)

export default router