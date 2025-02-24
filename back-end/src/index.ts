import express from "express";
import studentRoutes from "./api/routes/studentRoutes";
import facultyRoutes from "./api/routes/facultyRoutes";
import departmentRoutes from "./api/routes/departmentRoutes";
import courseRoutes from "./api/routes/courseRoutes";
import enrollmentRoutes from "./api/routes/enrollmentRoutes";
import instructorRoutes from "./api/routes/instructorRoutes";
import administrativeStaffRoutes from "./api/routes/administrativeStaffRoutes";

const app = express();
app.use(express.json());

// Route'ları burada tanımla
app.use("/", studentRoutes);
app.use("/", facultyRoutes);
app.use("/", departmentRoutes);
app.use("/", courseRoutes);
app.use("/", enrollmentRoutes);
app.use("/", instructorRoutes);
app.use("/", administrativeStaffRoutes);

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
