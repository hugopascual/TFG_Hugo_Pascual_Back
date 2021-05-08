const {models} = require('../models');

//-----------------------------------------------------------

// POST /api/products/add
exports.add = async (req, res, next) => {

    const {category,model,price,description,image,owner} = req.body;

    let status = 'ONSALE'

    let product = models.Product.build({
        category,
        model,
        price,
        description,
        image,
        owner,
        status
    });

    try {
        await product.save({fields: ["category","model","price","description","image","owner","status"]});
        res.send(200)
    } catch (error) {
        next(error)
    }
};

//-----------------------------------------------------------

// GET /api/products/getAll
exports.getAll = async (req, res, next) => {
    try {
        const products = await models.Product.findAll();
        res.json(products);
    } catch (error) {
      next(error)
    }
};

//-----------------------------------------------------------

// GET /api/products/getList/:category
exports.getList = async (req, res, next) => {
    try {
        const products = await models.Product.findAll({where : {category: req.query.category, status: 'ONSALE'}});
        res.json(products);
    } catch (error) {
        next(error)
    }
};

//-----------------------------------------------------------

// GET /api/products/getDetail/:id
exports.getDetail = async (req, res, next) => {
    try {
        const product = await models.Product.findByPk(req.query.id);
        res.json(product);
    } catch (error) {
        next(error)
    }
};

//-----------------------------------------------------------

// DELETE /api/products/delete/:id
exports.delete = async (req, res, next) => {
    try {
        await models.Product.destroy({where : {id: req.query.id}, force: true});
        res.send(200);
    } catch (error) {
        next(error)
    }
};

//-----------------------------------------------------------