import { Request, Response } from "express";
import { facultyService } from "../services/facultyService";

export const facultyController = {
  async getAllFaculties(req: Request, res: Response) {
    const faculties = await facultyService.getAllFaculties();
    res.json(faculties);
  },

  async getFacultyById(req: Request, res: Response) {
    const { id } = req.params;
    const faculty = await facultyService.getFacultyById(Number(id));
    res.json(faculty);
  },

  async createFaculty(req: Request, res: Response) {
    const newFaculty = await facultyService.createFaculty(req.body);
    res.status(201).json(newFaculty);
  },

  async updateFaculty(req: Request, res: Response) {
    const { id } = req.params;
    const updatedFaculty = await facultyService.updateFaculty(Number(id), req.body);
    res.json(updatedFaculty);
  },

  async deleteFaculty(req: Request, res: Response) {
    const { id } = req.params;
    await facultyService.deleteFaculty(Number(id));
    res.status(204).send();
  },
};