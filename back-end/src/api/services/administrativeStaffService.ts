import prisma from "../../config/db";

export const administrativeStaffService = {
  async getAllStaff() {
    return await prisma.administrativeStaff.findMany();
  },

  async getStaffById(id: number) {
    return await prisma.administrativeStaff.findUnique({ where: { id } });
  },

  async createStaff(data: any) {
    return await prisma.administrativeStaff.create({ data });
  },

  async updateStaff(id: number, data: any) {
    return await prisma.administrativeStaff.update({ where: { id }, data });
  },

  async deleteStaff(id: number) {
    return await prisma.administrativeStaff.delete({ where: { id } });
  },
};
