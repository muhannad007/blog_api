import { Router } from "express";
const { createBlog, deleteBlog } = require("../controllers/blog.controller");

const router = Router();

router.post("/create", createBlog);

router.delete("/delete", deleteBlog);

module.exports = router;
