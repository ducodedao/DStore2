const Category = require('../models/categoryModel')
const slugify = require('slugify')

// Create Category -- Admin
exports.addCategory = async (req, res, next) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name),
    }

    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId
    }

    const cat = new Category(categoryObj)
    cat.save((error, category) => {
        if (error) return res.status(400).json({ error })

        if (category) {
            return res.status(201).json({
                success: true,
                category,
            })
        }
    })
}

// Get Category -- Admin
exports.getCategory = async (req, res, next) => {
    const categories = await Category.find()

    const createCategories = (categories, parentId = null) => {
        const categoryList = []
        let category

        if (parentId == null) {
            category = categories.filter((cat) => cat.parentId == undefined)
        } else {
            category = categories.filter((cat) => cat.parentId == parentId)
        }

        for (let cate of category) {
            categoryList.push({
                _id: cate._id,
                name: cate.name,
                slug: cate.slug,
                parentId: cate.parentId,
                type: cate.type,
                children: createCategories(categories, cate._id),
            })
        }

        return categoryList
    }

    const categoryList = createCategories(categories)

    res.status(200).json({
        success: true,
        categoryList,
    })
}
