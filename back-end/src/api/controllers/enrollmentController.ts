import { Request, Response } from "express";
import { enrollmentService } from "../services/enrollmentService";

export const enrollmentController = {
  async getAllEnrollments(req: Request, res: Response) {
    const enrollments = await enrollmentService.getAllEnrollments();
    res.json(enrollments);
  },

  async getEnrollmentById(req: Request, res: Response) {
    const { id } = req.params;
    const enrollment = await enrollmentService.getEnrollmentById(Number(id));
    res.json(enrollment);
  },

  async createEnrollment(req: Request, res: Response) {
    const newEnrollment = await enrollmentService.createEnrollment(req.body);
    res.status(201).json(newEnrollment);
  },

  async updateEnrollment(req: Request, res: Response) {
    const { id } = req.params;
    const updatedEnrollment = await enrollmentService.updateEnrollment(Number(id), req.body);
    res.json(updatedEnrollment);
  },

  async deleteEnrollment(req: Request, res: Response) {
    const { id } = req.params;
    await enrollmentService.deleteEnrollment(Number(id));
    res.status(204).send();
  },
};