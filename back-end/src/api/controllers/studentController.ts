import { Request, Response } from "express";
import { studentService } from "../services/studentService";

export const studentController = {
  async getAllStudents(req: Request, res: Response) {
    const students = await studentService.getAllStudents();
    res.json(students);
  },

  async getStudentById(req: Request, res: Response) {
    const { id } = req.params;
    const student = await studentService.getStudentById(Number(id));
    res.json(student);
  },

  async createStudent(req: Request, res: Response) {
    const newStudent = await studentService.createStudent(req.body);
    res.status(201).json(newStudent);
  },

  async updateStudent(req: Request, res: Response) {
    const { id } = req.params;
    const updatedStudent = await studentService.updateStudent(
      Number(id),
      req.body
    );
    res.json(updatedStudent);
  },

  async deleteStudent(req: Request, res: Response) {
    const { id } = req.params;
    await studentService.deleteStudent(Number(id));
    res.status(204).send();
  },
};
