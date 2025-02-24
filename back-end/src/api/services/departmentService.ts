import prisma from "../../config/db";


export const departmentService = {
  async getAllDepartments() {
    return await prisma.department.findMany();
  },

  async getDepartmentById(id: number) {
    return await prisma.department.findUnique({ where: { id } });
  },

  async createDepartment(data: any) {
    return await prisma.department.create({ data });
  },

  async updateDepartment(id: number, data: any) {
    return await prisma.department.update({ where: { id }, data });
  },

  async deleteDepartment(id: number) {
    return await prisma.department.delete({ where: { id } });
  },
};