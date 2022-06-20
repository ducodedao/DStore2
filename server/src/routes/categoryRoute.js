const express = require('express')
const {
    addCategory,
    getCategory,
} = require('../controllers/categoryController')
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

const router = express.Router()

router
    .route('/admin/category/new')
    .post(isAuthenticatedUser, authorizeRoles('admin'), addCategory)

router
    .route('/admin/categories')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getCategory)

module.exports = router
