const Community = require("../models/community");
const handlePost = async (req, res, next) => {
  try {
    const { content, title, community, author } = req.body;
    const post = new Community({
      content,
      title,
      community,
      author,
    });
    await post.save();
    res.status(201).json(post);
  } catch {
    res.status(400).json({ message: "Invalid request" });
  }
};
module.exports = {
  handlePost,
};
