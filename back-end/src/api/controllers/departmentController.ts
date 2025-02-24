import { Request, Response } from "express";
import { departmentService } from "../services/departmentService";

export const departmentController = {
  async getAllDepartments(req: Request, res: Response) {
    const departments = await departmentService.getAllDepartments();
    res.json(departments);
  },

  async getDepartmentById(req: Request, res: Response) {
    const { id } = req.params;
    const department = await departmentService.getDepartmentById(Number(id));
    res.json(department);
  },

  async createDepartment(req: Request, res: Response) {
    const newDepartment = await departmentService.createDepartment(req.body);
    res.status(201).json(newDepartment);
  },

  async updateDepartment(req: Request, res: Response) {
    const { id } = req.params;
    const updatedDepartment = await departmentService.updateDepartment(Number(id), req.body);
    res.json(updatedDepartment);
  },

  async deleteDepartment(req: Request, res: Response) {
    const { id } = req.params;
    await departmentService.deleteDepartment(Number(id));
    res.status(204).send();
  },
};