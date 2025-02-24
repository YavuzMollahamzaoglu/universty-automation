import prisma from "../../config/db";

export const studentService = {
  async getAllStudents() {
    return await prisma.student.findMany();
  },

  async getStudentById(id: number) {
    return await prisma.student.findUnique({ where: { id } });
  },

  async createStudent(data: any) {
    return await prisma.student.create({ data });
  },

  async updateStudent(id: number, data: any) {
    return await prisma.student.update({ where: { id }, data });
  },

  async deleteStudent(id: number) {
    return await prisma.student.delete({ where: { id } });
  },
};
