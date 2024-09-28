import { Router } from "express";
const {
  getAll,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");

const router = Router();

router.get("/getall", getAll);

router.post("/create", createBlog);

router.put("/update/:id", updateBlog);

router.delete("/delete/:id", deleteBlog);

module.exports = router;
