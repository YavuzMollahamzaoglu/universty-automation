import { Request, Response } from "express";
import { administrativeStaffService } from "../services/administrativeStaffService";

export const administrativeStaffController = {
  async getAllStaff(req: Request, res: Response) {
    const staff = await administrativeStaffService.getAllStaff();
    res.json(staff);
  },

  async getStaffById(req: Request, res: Response) {
    const { id } = req.params;
    const staff = await administrativeStaffService.getStaffById(Number(id));
    res.json(staff);
  },

  async createStaff(req: Request, res: Response) {
    try {
      const newStaff = await administrativeStaffService.createStaff(req.body);
      res.status(201).json(newStaff);
    } catch (error) {
      res.status(400).json({ error: "Error creating administrative staff", details: error });
    }
  },

  async updateStaff(req: Request, res: Response) {
    const { id } = req.params;
    const updatedStaff = await administrativeStaffService.updateStaff(Number(id), req.body);
    res.json(updatedStaff);
  },

  async deleteStaff(req: Request, res: Response) {
    const { id } = req.params;
    await administrativeStaffService.deleteStaff(Number(id));
    res.status(204).send();
  },
};