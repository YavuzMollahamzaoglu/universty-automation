import express from "express";
import { facultyController } from "../controllers/facultyController";

const router = express.Router();

router.get("/facultys", facultyController.getAllFaculties);
router.get("/facultys/:id", facultyController.getFacultyById);
router.post("/facultys", facultyController.createFaculty);
router.put("/facultys/:id", facultyController.updateFaculty);
router.delete("/facultys/:id", facultyController.deleteFaculty);

export default router;
