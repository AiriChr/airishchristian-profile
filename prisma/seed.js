import { hash } from 'bcrypt';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
async function main() {
  const password = await hash('pa$$w0rD', 12);
  const user = await prisma.user.upsert({
    where: { email: 'airchr@test.com' },
    update: {},
    create: {
      email: 'airchr@test.com',
      name: 'Air Admin',
      password,
    },
  });

  console.log(user);
}

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
