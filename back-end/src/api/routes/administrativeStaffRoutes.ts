import express from "express";
import { administrativeStaffController } from "../controllers/administrativeStaffController";

const router = express.Router();

router.get("/administrativeStaffs", administrativeStaffController.getAllStaff);
router.get(
  "/administrativeStaffs/:id",
  administrativeStaffController.getStaffById
);
router.post("/administrativeStaffs", administrativeStaffController.createStaff);
router.put(
  "/administrativeStaffs/:id",
  administrativeStaffController.updateStaff
);
router.delete(
  "/administrativeStaffs/:id",
  administrativeStaffController.deleteStaff
);

export default router;
