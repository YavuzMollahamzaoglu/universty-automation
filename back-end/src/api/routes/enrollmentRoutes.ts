import express from "express";
import { enrollmentController } from "../controllers/enrollmentController";

const router = express.Router();

router.get("/enrollments", enrollmentController.getAllEnrollments);
router.get("/enrollments/:id", enrollmentController.getEnrollmentById);
router.post("/enrollments", enrollmentController.createEnrollment);
router.put("/enrollments/:id", enrollmentController.updateEnrollment);
router.delete("/enrollments/:id", enrollmentController.deleteEnrollment);

export default router;
