import prisma from "../../config/db";


export const instructorService = {
  async getAllInstructors() {
    return await prisma.instructor.findMany();
  },

  async getInstructorById(id: number) {
    return await prisma.instructor.findUnique({ where: { id } });
  },

  async createInstructor(data: any) {
    return await prisma.instructor.create({ data });
  },

  async updateInstructor(id: number, data: any) {
    return await prisma.instructor.update({ where: { id }, data });
  },

  async deleteInstructor(id: number) {
    return await prisma.instructor.delete({ where: { id } });
  },
};