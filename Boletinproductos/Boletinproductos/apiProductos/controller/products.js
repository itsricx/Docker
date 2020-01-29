const ProductService = require('../services/product')

let controllerProducto = {

    getProducts: (req, res, id) => {
        res.json(ProductService.findProducts());

    },
    getProducto: (req, res, id) => {
        res.status(200).json(ProductService.getOneById(req.params.id));
    }

}

module.exports = controllerProducto;