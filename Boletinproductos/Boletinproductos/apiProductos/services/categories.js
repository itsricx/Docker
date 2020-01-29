const _ = require('lodash')

const categories = [
{
    idCategoria:1,
    nombre:"Electrodemesticos",
    categoriaPadre: false
},

{
    idCategoria:2,
    nombre:"Hogar",
    categoriaPadre: false
},

]
let categoriesService ={ 

    findCategories: (category) =>{
        return categories;
    }


}
module.exports = categoriesService