const router = require('express').Router();
const {
     addThought,
     removeThought,
     getAllThoughts,
     getThoughtById,
     updateThought,
     addReaction, 
     removeReaction
    } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// get all thoughts
router.route('/').get(getAllThoughts);

//get thoughts by id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought);

// /api/thoughts/<userId>/<thoughtId>
router
.route('/:userId/:thoughtId')
.put(addReaction)
.delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;