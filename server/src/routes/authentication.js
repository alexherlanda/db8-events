import express from 'express'
import { readAllUsers, readOneUser, createUser, updateUser, deleteUser } from '../controllers/user.controller'

const router = express.Router()

/* /events END POINT */
router.route('/users')
  .get(readAllUsers)
  .post(createUser)

router.route('/users/:id')
  .get(readOneUser)
  .put(updateUser)
  .delete(deleteUser)

export default router