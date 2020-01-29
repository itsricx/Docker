const _ = require('lodash')

const comments = [
    {
        idComentario: 1,
        autor:{
            idAutor:1
        },
        cuerpo:"Gran producto!",
        fechaPublicacion:"25/07/2019"
    },

    {
        idComentario: 2,
        autor:{
            idAutor:2
        },
        cuerpo:"Me ha encantado este producto",
        fechaPublicacion:"25/09/2019"
    }

]

let commentsService ={ 

    findComments: () =>{
        return comments;
    },

    
    getOneById: (idComentario) => {
        const found = comments.find(element => element.idComentario == idComentario);

        return found;
    },

    createComment: (comments) => {
        comments.push(comments);
    }


}
module.exports = commentsService