const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(cors({origin: 'https://portfolio-neon-rho-78.vercel.app/'}));
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const projects = await prisma.project.findMany(); // ✅ fetch from DB
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch projects" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
