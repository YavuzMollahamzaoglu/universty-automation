import prisma from "../../config/db";


export const courseService = {
  async getAllCourses() {
    return await prisma.course.findMany();
  },

  async getCourseById(id: number) {
    return await prisma.course.findUnique({ where: { id } });
  },

  async createCourse(data: any) {
    return await prisma.course.create({ data });
  },

  async updateCourse(id: number, data: any) {
    return await prisma.course.update({ where: { id }, data });
  },

  async deleteCourse(id: number) {
    return await prisma.course.delete({ where: { id } });
  },
};