const _ = require('lodash')

const products = [
    {
        idProducto: 1,
        nombre: "Batidora",
        descripcion:"Increible batidora",
        precio: 50,
        fechaPublicacion:"31/12/2019",
        stock:20,
        categoria:{
            idCategoria:1
        },
        comentarios:{
            idComentario:1
        }
    },

    {
        idProducto: 2,
        nombre: "Pañales",
        descripcion:"Increibles Pañales",
        precio: 20,
        fechaPublicacion:"12/12/2018",
        stock:10,
        categoria:{
            idCategoria:2
        },
        comentarios:{
            idComentario:2
        }
    }
]
let productsService ={ 

    findProducts: () =>{
        return products;
    },
    getOneById: (idProducto) => {
        const found = products.find(element => element.idProducto == idProducto);

        return found;
    },

    createProduct: (products) => {
        products.push(products);
    }
    
}

module.exports = productsService