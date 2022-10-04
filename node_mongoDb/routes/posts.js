const express = require('express');

const router = express.Router();

// Get all Posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch(err) {
        res.json({message: err})
    }
  
});

// Get a specific post by id
router.get('/:postId', async (req, res) => {

   try {
      
   const id = req.params.postId
   const post = await Post.findById(id)
    res.json(post)
} catch(err) {
    res.json({message: err})
}
});

// Submit a post
router.post('/', async (req,res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  }) 

  const savedPosts = await post.save();
  try {
    res.status(200).json(savedPosts)
  } catch(err) {
    res.json({message: err})
  }

});

// Delete a specific post
router.delete('/:postId', async (req,res) => {
    try {
        const id = req.params.postId;
        await Post.deleteOne({_id: id});
        res.status(200).json({message: "Item deleted"});
    } catch(err) {
        res.json({message: err})
    } 
})

// Update a post
router.patch('/:postId', async (req,res) => {
    try {
    const id = req.params.postId
    const updatedPost = await Post.updateOne({_id: id},  
        {
        $set: { title: req.body.title }
    });
    res.status(200).json(updatedPost)

    } catch(err) {
      res.json({message: err})
    }
  
  });


module.exports = router;