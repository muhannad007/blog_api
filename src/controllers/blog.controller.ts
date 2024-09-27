import { Request, Response } from "express";
const Blog = require("../models/blogModel");

const getAll = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const createBlog = async (req: Request, res: Response) => {
  const blog = new Blog(req.body);
  try {
    const newBlog = await Blog.create(blog);
    res.status(200).json(newBlog);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  const id = req.params.id;
  const blog = await Blog.findOneAndDelete({ _id: id });

  if (!blog) {
    res.status(400).json({ error: "No such blog" });
  }

  res.status(200).json(blog);
};

module.exports = {
  getAll,
  createBlog,
  deleteBlog,
};
