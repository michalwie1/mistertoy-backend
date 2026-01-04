import express from 'express'

import { requireAuth, requireAdmin } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'

import {addReview, getReviews, deleteReview} from './review.controller.js'

// const router = express.Router()
export const reviewRoutes = express.Router()


reviewRoutes.get('/', log, getReviews)
reviewRoutes.post('/',  log, requireAuth, addReview)
reviewRoutes.delete('/:id',  requireAdmin, deleteReview)

// export const reviewRoutes = router