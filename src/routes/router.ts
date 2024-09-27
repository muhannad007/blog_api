import { Router } from "express";
const {
  getAll,
  createBlog,
  deleteBlog,
} = require("../controllers/blog.controller");

const router = Router();

router.get("/getall", getAll);

router.post("/create", createBlog);

router.delete("/delete", deleteBlog);

module.exports = router;
