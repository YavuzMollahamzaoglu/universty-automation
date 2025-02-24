import express from "express";
import { instructorController } from "../controllers/instructorController";

const router = express.Router();

router.get("/instructors", instructorController.getAllInstructors);
router.get("/instructors/:id", instructorController.getInstructorById);
router.post("/instructors", instructorController.createInstructor);
router.put("/instructors/:id", instructorController.updateInstructor);
router.delete("/instructors/:id", instructorController.deleteInstructor);

export default router;
