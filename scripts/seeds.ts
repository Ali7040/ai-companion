import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.category.createMany({
      data: [
        { name: 'Famous People' },
        { name: 'Movies & TV' },
        { name: 'Musicians' },
        { name: 'Games' },
        { name: 'Animals' },
        { name: 'Philosophy' },
        { name: 'Scientists' },
      ],
    });
  } catch (error) {
    console.error('Error seeding default categories:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();