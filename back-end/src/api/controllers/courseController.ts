import { Request, Response } from "express";
import { courseService } from "../services/courseService";

export const courseController = {
  async getAllCourses(req: Request, res: Response) {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  },

  async getCourseById(req: Request, res: Response) {
    const { id } = req.params;
    const course = await courseService.getCourseById(Number(id));
    res.json(course);
  },

  async createCourse(req: Request, res: Response) {
    const newCourse = await courseService.createCourse(req.body);
    res.status(201).json(newCourse);
  },

  async updateCourse(req: Request, res: Response) {
    const { id } = req.params;
    const updatedCourse = await courseService.updateCourse(Number(id), req.body);
    res.json(updatedCourse);
  },

  async deleteCourse(req: Request, res: Response) {
    const { id } = req.params;
    await courseService.deleteCourse(Number(id));
    res.status(204).send();
  },
};