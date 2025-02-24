import prisma from "../../config/db";


export const enrollmentService = {
  async getAllEnrollments() {
    return await prisma.enrollment.findMany();
  },

  async getEnrollmentById(id: number) {
    return await prisma.enrollment.findUnique({ where: { id } });
  },

  async createEnrollment(data: any) {
    return await prisma.enrollment.create({ data });
  },

  async updateEnrollment(id: number, data: any) {
    return await prisma.enrollment.update({ where: { id }, data });
  },

  async deleteEnrollment(id: number) {
    return await prisma.enrollment.delete({ where: { id } });
  },
};