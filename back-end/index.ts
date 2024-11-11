import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Student CRUD
app.get("/students", async (req: Request, res: Response) => {
  const students = await prisma.student.findMany();
  res.json(students);
});

app.get("/students/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await prisma.student.findUnique({
    where: { id: Number(id) },
  });
  res.json(student);
});

app.post("/students", async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    enrollmentYear,
    status,
    facultyId,
    departmentId,
  } = req.body;
  const newStudent = await prisma.student.create({
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      enrollmentYear,
      status,
      facultyId,
      departmentId,
    },
  });
  res.status(201).json(newStudent);
});

app.put("/students/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    enrollmentYear,
    status,
    facultyId,
    departmentId,
  } = req.body;
  const updatedStudent = await prisma.student.update({
    where: { id: Number(id) },
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      enrollmentYear,
      status,
      facultyId,
      departmentId,
    },
  });
  res.json(updatedStudent);
});

app.delete("/students/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.student.delete({ where: { id: Number(id) } });
  res.status(204).send();
});

// Faculty CRUD
app.get("/faculties", async (req: Request, res: Response) => {
  const faculties = await prisma.faculty.findMany();
  res.json(faculties);
});

app.get("33/faculties/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const faculty = await prisma.faculty.findUnique({
    where: { id: Number(id) },
  });
  res.json(faculty);
});

app.post("/faculties", async (req: Request, res: Response) => {
  const { name, deanId } = req.body;
  const newFaculty = await prisma.faculty.create({
    data: { name, deanId },
  });
  res.status(201).json(newFaculty);
});

app.put("/faculties/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, deanId } = req.body;
  const updatedFaculty = await prisma.faculty.update({
    where: { id: Number(id) },
    data: { name, deanId },
  });
  res.json(updatedFaculty);
});

app.delete("/faculties/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.faculty.delete({ where: { id: Number(id) } });
  res.status(204).send();
});

// Department CRUD
app.get("/departments", async (req: Request, res: Response) => {
  const departments = await prisma.department.findMany();
  res.json(departments);
});

app.get("/departments/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const department = await prisma.department.findUnique({
    where: { id: Number(id) },
  });
  res.json(department);
});

app.post("/departments", async (req: Request, res: Response) => {
  const { name, facultyId, headId } = req.body;
  const newDepartment = await prisma.department.create({
    data: { name, facultyId, headId },
  });
  res.status(201).json(newDepartment);
});

app.put("/departments/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, facultyId, headId } = req.body;
  const updatedDepartment = await prisma.department.update({
    where: { id: Number(id) },
    data: { name, facultyId, headId },
  });
  res.json(updatedDepartment);
});

app.delete("/departments/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.department.delete({ where: { id: Number(id) } });
  res.status(204).send();
});

// Course CRUD
app.get("/courses", async (req: Request, res: Response) => {
  const courses = await prisma.course.findMany();
  res.json(courses);
});

app.get("/courses/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const course = await prisma.course.findUnique({ where: { id: Number(id) } });
  res.json(course);
});

app.post("/courses", async (req: Request, res: Response) => {
  const { name, credit, facultyId, departmentId, instructorId } = req.body;
  const newCourse = await prisma.course.create({
    data: { name, credit, facultyId, departmentId, instructorId },
  });
  res.status(201).json(newCourse);
});

app.put("/courses/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, credit, facultyId, departmentId, instructorId } = req.body;
  const updatedCourse = await prisma.course.update({
    where: { id: Number(id) },
    data: { name, credit, facultyId, departmentId, instructorId },
  });
  res.json(updatedCourse);
});

app.delete("/courses/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.course.delete({ where: { id: Number(id) } });
  res.status(204).send();
});

// Enrollment CRUD
app.get("/enrollments", async (req: Request, res: Response) => {
  const enrollments = await prisma.enrollment.findMany();
  res.json(enrollments);
});

app.get("/enrollments/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const enrollment = await prisma.enrollment.findUnique({
    where: { id: Number(id) },
  });
  res.json(enrollment);
});

app.post("/enrollments", async (req: Request, res: Response) => {
  const { studentId, courseId, grade, attendance } = req.body;
  const newEnrollment = await prisma.enrollment.create({
    data: { studentId, courseId, grade, attendance },
  });
  res.status(201).json(newEnrollment);
});

app.put("/enrollments/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { studentId, courseId, grade, attendance } = req.body;
  const updatedEnrollment = await prisma.enrollment.update({
    where: { id: Number(id) },
    data: { studentId, courseId, grade, attendance },
  });
  res.json(updatedEnrollment);
});

app.delete("/enrollments/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.enrollment.delete({ where: { id: Number(id) } });
  res.status(204).send();
});

// Instructor CRUD
app.get("/instructors", async (req: Request, res: Response) => {
  const instructors = await prisma.instructor.findMany();
  res.json(instructors);
});

app.get("/instructors/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const instructor = await prisma.instructor.findUnique({
    where: { id: Number(id) },
  });
  res.json(instructor);
});

app.post("/instructors", async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    title,
    facultyId,
    departmentId,
  } = req.body;
  const newInstructor = await prisma.instructor.create({
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      title,
      facultyId,
      departmentId,
    },
  });
  res.status(201).json(newInstructor);
});

app.put("/instructors/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    title,
    facultyId,
    departmentId,
  } = req.body;
  const updatedInstructor = await prisma.instructor.update({
    where: { id: Number(id) },
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      title,
      facultyId,
      departmentId,
    },
  });
  res.json(updatedInstructor);
});

app.delete("/instructors/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.instructor.delete({ where: { id: Number(id) } });
  res.status(204).send();
});

// Administrative Staff CRUD
app.get("/administrative-staff", async (req: Request, res: Response) => {
  const staff = await prisma.administrativeStaff.findMany();
  res.json(staff);
});

app.get("/administrative-staff/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const staff = await prisma.administrativeStaff.findUnique({
    where: { id: Number(id) },
  });
  res.json(staff);
});

app.post("/administrative-staff", async (req: Request, res: Response) => {
  const { firstName, lastName, email, phoneNumber, role, departmentId } =
    req.body;
  try {
    const newStaff = await prisma.administrativeStaff.create({
      data: { firstName, lastName, email, phoneNumber, role, departmentId },
    });
    res.status(201).json(newStaff);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error creating administrative staff", details: error });
  }
});

app.put("/administrative-staff/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstName, lastName, email, phoneNumber, departmentId } = req.body;
  const updatedStaff = await prisma.administrativeStaff.update({
    where: { id: Number(id) },
    data: { firstName, lastName, email, phoneNumber, departmentId },
  });
  res.json(updatedStaff);
});

app.delete("/administrative-staff/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.administrativeStaff.delete({ where: { id: Number(id) } });
  res.status(204).send();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
