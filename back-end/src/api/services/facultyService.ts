import prisma from "../../config/db";


export const facultyService = {
  async getAllFaculties() {
    return await prisma.faculty.findMany();
  },

  async getFacultyById(id: number) {
    return await prisma.faculty.findUnique({ where: { id } });
  },

  async createFaculty(data: any) {
    return await prisma.faculty.create({ data });
  },

  async updateFaculty(id: number, data: any) {
    return await prisma.faculty.update({ where: { id }, data });
  },

  async deleteFaculty(id: number) {
    return await prisma.faculty.delete({ where: { id } });
  },
};