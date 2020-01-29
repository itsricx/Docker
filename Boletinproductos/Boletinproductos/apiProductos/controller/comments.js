const CommentsService = require('../services/comments')

let controllerComments = {

    getComments: (req, res, id) => {
        res.json(CommentsService.findComments());

    },
    getComment: (req, res, id) => {
        res.status(200).json(CommentsService.getOneById(req.params.id));
    },
    createComment: (req, res, id) => {
        const created = CommentsService.createComment(req.body);

        if(created){
            res.status(201).json({
                id: req.body.id,
                add: true
            })
        }else{
            res.status(400);
        }

    }

}

module.exports = controllerComments;