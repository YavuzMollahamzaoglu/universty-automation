import { Request, Response } from "express";
import { instructorService } from "../services/instructorService";

export const instructorController = {
  async getAllInstructors(req: Request, res: Response) {
    const instructors = await instructorService.getAllInstructors();
    res.json(instructors);
  },

  async getInstructorById(req: Request, res: Response) {
    const { id } = req.params;
    const instructor = await instructorService.getInstructorById(Number(id));
    res.json(instructor);
  },

  async createInstructor(req: Request, res: Response) {
    const newInstructor = await instructorService.createInstructor(req.body);
    res.status(201).json(newInstructor);
  },

  async updateInstructor(req: Request, res: Response) {
    const { id } = req.params;
    const updatedInstructor = await instructorService.updateInstructor(Number(id), req.body);
    res.json(updatedInstructor);
  },

  async deleteInstructor(req: Request, res: Response) {
    const { id } = req.params;
    await instructorService.deleteInstructor(Number(id));
    res.status(204).send();
  },
};