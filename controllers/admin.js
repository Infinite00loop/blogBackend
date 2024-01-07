const Blog = require('../models/blog');

exports.insertBlog = (req, res, next) => {
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;
    Blog.create({
      title: title,
      author: author,
      content: content
    })
    .then(result=>{
      //console.log(result);
      console.log('Created blog');
      res.redirect('/get-blog')
    })
    .catch(err => {
      console.log(err)
    })
  };

exports.deleteBlog = (req,res,next)=>{
    const title=req.params.title;
    console.log(title)
     Blog.destroy({
        where: {
          title:title
        },
      })
    .then((result)=>{
        console.log(result);
        res.redirect('/get-blog')
    })
    .catch(err=>console.log(err));
}

exports.getBlog =(req,res,next)=>{
    Blog.findAll()
    .then((result)=>{
        res.json(result)
    })
    .catch(err=>console.log(err));
};