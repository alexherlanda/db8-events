import express from 'express'

import { getIndex } from '../controllers/index'

var router = express.Router()

/* GET home page. */
router.get('/', getIndex)

export default router
