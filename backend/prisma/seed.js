const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function main(){
    await prisma.project.create({
        data: {
          title: 'Awesome Portfolio',
          description: 'A portfolio built with React and Prisma showcasing my work and skills.',
          image: '/images/project1.jpg',
          date: new Date('2025-07-13'),
        },
      });
      
      await prisma.project.create({
        data: {
          title: 'Chat App',
          description: 'Real-time chat application using socket.io and Node.js backend.',
          image: '/images/project2.jpg',
          date: new Date('2025-08-11'),
        },
      });
      
      await prisma.project.create({
        data: {
          title: 'E-Commerce Store',
          description: 'A full-stack e-commerce store with React frontend and Express backend.',
          image: '/images/project3.jpg',
          date: new Date('2025-06-01'),
        },
      });
      
      await prisma.project.create({
        data: {
          title: 'Blog Platform',
          description: 'A blogging platform where users can create, edit and delete posts.',
          image: '/images/project4.jpg',
          date: new Date('2025-07-23'),
        },
      });
    };      
   

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });