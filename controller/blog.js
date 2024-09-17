const BlogSchema = require("../models/blog");

const handleBlog = async (req, res, next) => {
  try {
    const { title, author, content, date, email, contact } = req.body;
    const blog = new BlogSchema({
      Title: title,
      Content: content,
      Date: date,
      Author: author,
      Email: email,
      Contact: contact,
    });
    await blog.save();
    res.status(200).json({ message: "Blog created successfully" });
  } catch {
    res.status(500).json({ message: "Unable to create Blog" });
  }
};

const getBlog = async (req, res, next) => {
  try {
    const blog = await BlogSchema.find();
    res.status(200).json(blog);
  } catch {
    res.status(500).json({ message: "Unable to fetch Blogs" });
  }
};
module.exports = {
  handleBlog,
  getBlog,
};
