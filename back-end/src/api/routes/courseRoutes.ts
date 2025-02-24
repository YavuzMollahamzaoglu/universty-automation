import express from "express";
import { courseController } from "../controllers/courseController";

const router = express.Router();

router.get("/courses", courseController.getAllCourses);
router.get("/courses/:id", courseController.getCourseById);
router.post("/courses", courseController.createCourse);
router.put("/courses/:id", courseController.updateCourse);
router.delete("/courses/:id", courseController.deleteCourse);

export default router;
