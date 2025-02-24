import express from "express";
import { departmentController } from "../controllers/departmentController";

const router = express.Router();

router.get("/departments", departmentController.getAllDepartments);
router.get("/departments/:id", departmentController.getDepartmentById);
router.post("/departments", departmentController.createDepartment);
router.put("/departments/:id", departmentController.updateDepartment);
router.delete("/departments/:id", departmentController.deleteDepartment);

export default router;
